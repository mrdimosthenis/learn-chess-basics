import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import {Chess, Square} from 'chess.js';
import {Chessboard} from 'react-chessboard';
import * as Tone from 'tone';
import confetti from 'canvas-confetti';

const notes = [
    "C3", "D3", "E3", "F3", "G3", "A3", "B3",
    "C4", "D4", "E4", "F4", "G4", "A4", "B4",
    "C5", "D5", "E5", "F5", "G5", "A5", "B5",
    "C6", "D6", "E6", "F6", "G6", "A6", "B6",
    "C7", "D7", "E7", "F7", "G7", "A7", "B7"
];

function App() {
    const [chess, setChess] = useState(new Chess());
    const [arrows, setArrows] = useState<[Square, Square][]>([]);
    const [noteIndex, setNoteIndex] = useState(0);
    const [trackedSquares, setTrackedSquares] = useState<Set<Square>>(new Set());
    const [isHoldState, setIsHoldState] = useState(false);

    const synthRef = useRef<Tone.Synth | null>(null);

    useEffect(() => {
        if (!synthRef.current) {
            synthRef.current = new Tone.Synth().toDestination();
        }
    }, []);

    useEffect(() => {
        const moves = chess.moves({verbose: true});
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        const newArrows = moves
            .filter(move => move.from === randomMove.from)
            .map(move => [move.from, move.to] as [Square, Square]);
        setArrows(newArrows);
        const newTrackedSquares = new Set(newArrows.flat());
        setTrackedSquares(newTrackedSquares);
    }, [chess]);

    const playMelody = async () => {
        await Tone.start();
        const melody = ["C4", "E4", "G4", "C5"];
        melody.forEach((note, index) => {
            synthRef.current!.triggerAttackRelease(note, "8n", Tone.now() + index * 0.1);
        });
    };

    const handleSquareClick = async (square: Square) => {
        if (isHoldState) return;
        const newArrows = arrows.filter(([_from, to]) => to !== square);
        if (newArrows.length !== arrows.length) {
            setArrows(newArrows);
            if (newArrows.length === 0) {
                setIsHoldState(true);
                await playMelody();
                const lastArrow = arrows[arrows.length - 1];
                const move = chess.move({from: lastArrow[0], to: lastArrow[1], promotion: 'q'});
                if (move && move.captured) {
                    confetti();
                }
                const newFen = chess.fen();
                const newChess = new Chess(newFen);
                setTrackedSquares(new Set());
                setTimeout(() => {
                    setIsHoldState(false);
                    setArrows([]);
                    setNoteIndex(0);
                    setTrackedSquares(new Set());
                    setChess(newChess);
                }, 2000);
            } else {
                await Tone.start();
                synthRef.current!.triggerAttackRelease(notes[noteIndex], "8n");
                setNoteIndex((prevIndex) => prevIndex + 1);
            }
        } else if (!trackedSquares.has(square)) {
            await Tone.start();
            synthRef.current!.triggerAttackRelease("C2", "8n");
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="Chessboard-container">
                    <Chessboard
                        position={chess.fen()}
                        customArrows={arrows}
                        arePiecesDraggable={false}
                        areArrowsAllowed={false}
                        onSquareClick={handleSquareClick}
                        onDragOverSquare={handleSquareClick}
                        showBoardNotation={false}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
