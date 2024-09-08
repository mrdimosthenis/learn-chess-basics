import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import {Chess, Square} from 'chess.js';
import {Chessboard} from 'react-chessboard';
import * as Tone from 'tone';
import confetti from 'canvas-confetti';

const kalinka = [
    "E4", "D4",
    "B3", "C4", "D4",
    "B3", "C4", "D4",
    "C4", "B3", "A3",

    "E4", "E4", "D4",
    "C4", "B3", "C4", "D4",
    "B3", "C4", "D4",
    "C4", "B3", "A3",

    "E4", "D4",
    "B3", "C4", "D4",
    "B3", "C4", "D4",
    "C4", "B3", "A3",

    "E4", "E4", "D4",
    "C4", "B3", "C4", "D4",
    "B3", "C4", "D4",
    "C4", "B3", "A3",

    "G3",

    "E4", "G4", "F4", "E4", "D4", "C4", "G3",
    "E4", "G4", "F4", "E4", "D4", "C4", "G3",

    "A3", "B3", "D4", "C4", "B3", "A3", "G3", "F3", "E3",

    "E4", "G4", "F4", "E4", "D4", "C4", "G3",
    "E4", "G4", "F4", "E4", "D4", "C4", "G3",

    "A3", "B3", "D4", "C4", "B3", "A3", "G3", "F3", "E3"
];


function App() {
    const [chess, setChess] = useState(new Chess());
    const [arrows, setArrows] = useState<[Square, Square][]>([]);
    const [noteIndex, setNoteIndex] = useState(0);
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
    }, [chess]);

    const handleSquareClick = async (square: Square) => {
        if (isHoldState) return;
        const newArrows = arrows.filter(([_from, to]) => to !== square);
        if (newArrows.length !== arrows.length) {
            setArrows(newArrows);

            await Tone.start();
            synthRef.current!.triggerAttackRelease(kalinka[noteIndex % kalinka.length], "8n");
            setNoteIndex((prevIndex) => prevIndex + 1);

            if (newArrows.length === 0) {
                setIsHoldState(true);
                const lastArrow = arrows[arrows.length - 1];
                const move = chess.move({from: lastArrow[0], to: lastArrow[1], promotion: 'q'});
                if (move && chess.isCheckmate()) {
                    confetti();
                }
                const newFen = chess.fen();
                const newChess = new Chess(newFen);
                setIsHoldState(false);
                setArrows([]);
                setChess(newChess);
            }
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
