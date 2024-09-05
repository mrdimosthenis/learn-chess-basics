import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {Chess, Square} from 'chess.js';
import {Chessboard} from 'react-chessboard';
import * as Tone from 'tone';

function App() {
    const [chess] = useState(new Chess());
    const [arrows, setArrows] = useState<[Square, Square][]>([]);

    useEffect(() => {
        const moves = chess.moves({verbose: true});
        if (moves.length > 0) {
            const firstMove = moves[0];
            const newArrows = moves
                .filter(move => move.from === firstMove.from)
                .map(move => [move.from, move.to] as [Square, Square]);
            setArrows(newArrows);
        }
    }, [chess]);

    const handleSquareClick = async (square: Square) => {
        setArrows(prevArrows => prevArrows.filter(([_from, to]) => to !== square));
        await Tone.start();
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div className="Chessboard-container">
                    <Chessboard
                        position={chess.fen()}
                        customArrows={arrows}
                        arePiecesDraggable={false}
                        areArrowsAllowed={false}
                        onSquareClick={handleSquareClick}
                    />
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React {chess.fen()}
                </a>
            </header>
        </div>
    );
}

export default App;
