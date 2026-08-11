# Tic Tac Toe

Complete tic-tac-toe game developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), with a focus on **code organization**, **factory functions**, and **module pattern**.

## Project Objective

The main objective was to practice:
- Code organization with Module Pattern and Factory Functions
- Encapsulation and separation of responsibilities
- Structured DOM manipulation
- Game logic (win and draw checking)
- Application state management
- Interfaces between different code modules
- Scope and closures in JavaScript

## What is it?

A fully functional tic-tac-toe game for two players containing:
- Player registration system with custom names
- Interactive 3x3 board
- X and O markers for each player
- Alternating turn system
- Automatic win detection
- Draw detection
- Game reset interface

## How to use

1. Open the `index.html` file in your browser
2. Enter the names of the two players in the input fields
3. Click "Start" to start the game
4. Player 1 (X) and Player 2 (O) click alternately on the board cells
5. The game automatically detects a win or a draw
6. Use the "Clear" button to restart

## Features

- **Player System**: Custom name registration for both players
- **Interactive Board**: 3x3 grid with clickable cells
- **Alternating Turns**: Automatic switching between players
- **Win Detection**: Checks all possible combinations (rows, columns, diagonals)
- **Draw Detection**: Identifies when the board is full without a winner
- **Move Validation**: Prevents marking already occupied cells
- **Dynamic Interface**: Immediate visual feedback for moves
- **Game Reset**: Allows starting a new match at any time

## Code Patterns

- **Module Pattern**: Used to encapsulate functionality and prevent global scope pollution
- **Factory Functions**: Object creation (players, board) without using `new`
- **Separation of Concerns**: Separate modules for rendering, game logic, and UI
- **Closures**: Protection of private variables inside modules

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+) - Module Pattern, Factory Functions, Closures

## Visualization

<img width="1910" height="915" alt="tic-tac-toe-screenshot" src="https://github.com/user-attachments/assets/2dd184a1-b74c-43d0-8048-b7ed0dd793c3" />

---

Project developed following: [The Odin Project - Tic Tac Toe](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
