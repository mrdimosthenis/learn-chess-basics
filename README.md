# Learn Chess Basics

## Overview

This project is a fun and interactive React application designed to help users learn the basics of chess while enjoying a musical experience. It features an interactive chessboard and integrates sound using the Tone.js library to play notes as you interact with the board. Additionally, the project celebrates checkmate with a confetti animation, making learning chess more engaging and enjoyable.

## Features

- **Interactive Chessboard**: Displays a fully functional chessboard where users can interact with pieces by clicking squares.
- **Guided Moves**: Highlights possible moves on the board to assist users in learning chess moves.
- **Musical Notes**: Each valid move on the board plays a musical note, creating a connection between the game and music.
- **Checkmate Celebration**: When the game reaches a checkmate, a confetti animation is triggered, adding a fun celebratory effect.
- **Chess Engine**: Uses the `chess.js` library to manage the game logic, such as moves, turns, and checkmate validation.
- **Kalinka Melody**: The notes played follow a melody from the Russian folk song "Kalinka."

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/learn-chess-basics.git
   cd learn-chess-basics
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Usage

1. **Interact with the Chessboard**: Click on a square to move pieces. The valid moves will be highlighted with arrows.
2. **Musical Feedback**: Each successful move triggers a musical note. Try to make moves and follow along with the Kalinka melody.
3. **Checkmate**: When you reach checkmate, confetti will rain down to celebrate your victory.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **chess.js**: Chess library for managing chess logic, moves, and validations.
- **react-chessboard**: Component to render and interact with the chessboard.
- **Tone.js**: Sound library for generating and playing musical notes.
- **Canvas-Confetti**: Used to create the confetti animation effect for checkmate celebrations.

## Project Structure

- **App.js**: The main component that initializes the chessboard, handles game logic, and integrates sound and animations.
- **App.css**: Styles for the application.
- **Chessboard & Chess Engine**: Handles game state and updates the board with moves.

## How it Works

1. The chessboard displays the current state of the game, powered by `chess.js`.
2. The application generates arrows highlighting possible moves, guiding users to valid squares.
3. When a valid move is made, a musical note from the Kalinka melody plays using `Tone.js`.
4. On checkmate, the board is reset and a confetti effect is triggered to celebrate the victory.

## License

This project is open-source and available under the MIT License.

Enjoy learning chess with music and fun animations!
