# learn-chess-basics

## Overview

The **learn-chess-basics** app is an interactive, educational tool designed to help beginners grasp basic chess movements in a fun and engaging way. Using the app, users can observe random chess moves, track key squares, and receive musical feedback as they interact with the gameboard. It includes visual guides (arrows) for possible moves, sound effects powered by Tone.js, and celebratory confetti for successful captures.

## Features

- **Interactive Chessboard**: A chessboard rendered using `react-chessboard`, which visually displays the current state of the game.
- **Move Suggestions**: Arrows automatically highlight possible moves after every random computer move, helping users follow the flow of the game.
- **Sound Feedback**: Musical notes are played when certain actions are taken, adding an auditory layer to the learning experience.
- **Confetti Celebrations**: Fun confetti animation triggers when a piece is captured, creating an enjoyable feedback loop for learners.
- **Automatic Move Reset**: The game resets itself after a capture, providing a smooth experience for beginners to continuously practice without interruptions.

## Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/learn-chess-basics.git
   ```
2. Navigate to the project directory:
   ```bash
   cd learn-chess-basics
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to interact with the app.

## Usage

1. **Game Start**: Upon launching the app, a chessboard is displayed with the initial game state (starting FEN position).
2. **Arrows for Move Suggestions**: The app randomly generates possible moves and highlights them with arrows on the chessboard.
3. **Clicking Squares**: Clicking a valid square will make the corresponding move and trigger sound feedback.
4. **Confetti on Capture**: When a capture is made, celebratory confetti will appear, and the board resets after a brief period.
5. **Musical Feedback**: Enjoy a sequence of musical notes when you click valid squares, adding an auditory learning experience.

## Dependencies

- **React**: The core framework for building this interactive interface.
- **chess.js**: Used to handle the game logic, such as generating valid moves and updating the game state.
- **react-chessboard**: A React component to render the chessboard.
- **Tone.js**: Provides the musical feedback and handles audio synthesis.
- **canvas-confetti**: Animates celebratory confetti effects when a capture occurs.

## Contributing

Feel free to fork the repository, create a new branch, and submit a pull request for any improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License.
