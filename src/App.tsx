import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

function App() {
  const chess = new Chess();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="Chessboard-container">
          <Chessboard position={chess.fen()} />
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
