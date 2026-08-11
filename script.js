const BoardRenderer = (() => {
    const renderBoard = (boardArr, inputReceiver) => {
        const gameBoard = document.querySelector(".game-board");
        gameBoard.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const gameTile = document.createElement("div");
            gameTile.classList.add("tile");
            gameTile.innerText = boardArr[i];
            gameTile.addEventListener("click", () => inputReceiver(i));
            gameBoard.append(gameTile);
        }
    }

    const clearBoard = () => {
        const gameBoard = document.querySelector(".game-board");
        gameBoard.innerText = '';
    }
    return { renderBoard, clearBoard };
})();


const Game = ((boardRenderer) => {
    const gameBoard = createGameBoard();
    const gameManager = createGameManager();
    const ui = createUiManager();

    let gameRunning = false;

    let currentPlayer = null;
    let player1 = null;
    let player2 = null;
    let players = null
    currentPlayer = 0;

    function createUiManager() {
        const player1NameInput = document.querySelector("#player1");
        const player2NameInput = document.querySelector("#player2");
        const startButton = document.querySelector("#start-btn");
        startButton.addEventListener("click", gameManager.startGame);
        const clearButton = document.querySelector("#clear-btn");
        clearButton.addEventListener("click", gameManager.clearGame);
        const gameBoardContainer = document.querySelector(".game-board");
        const winnerP = document.querySelector(".winner");

        const tie = () => {
            winnerP.innerText = "The game ended in a draw!";
            winnerP.classList.remove("hidden");
        }

        const showWinner = (winnerName) => {
            winnerP.innerText = "Round won by " + winnerName;
            winnerP.classList.remove("hidden");
        }

        const clearUi = () => {
            gameBoardContainer.classList.add("hidden");
            gameBoardContainer.innerText = '';
            winnerP.classList.add("hidden");
            startButton.removeAttribute("disabled");
            clearButton.classList.add("hidden");
        }

        const startUi = () => {
            gameBoardContainer.classList.remove("hidden");
            clearButton.classList.remove("hidden");
            startButton.setAttribute("disabled", "");
        }

        const getPlayerNames = () => {
            if (player1NameInput.value == "" || player2NameInput.value == "") {
                alert("Type the players' names");
                return;
            }
            return [player1NameInput.value, player2NameInput.value];
        }

        return { showWinner, clearUi, getPlayerNames, startUi, tie };
    }

    function createGameManager() {
        const startGame = () => {
            boardRenderer.renderBoard(gameBoard.getGameBoard(), inputReceiver);
            const playerNames = ui.getPlayerNames();
            if (playerNames == null) return;
            player1 = createPlayer(playerNames[0], "X");
            player2 = createPlayer(playerNames[1], "O");
            players = [player1, player2];
            ui.startUi();
            gameRunning = true;
        }

        const clearGame = () => {
            player1 = null;
            player2 = null;
            players = [null, null];
            gameRunning = false;
            currentPlayer = 0;
            gameBoard.clearBoard();
            ui.clearUi();
        }

        const receiveInput = (input) => {
            if (!gameRunning) return;
            const marked = gameBoard.markPosition(input, players[currentPlayer].getMarker());
            if (!marked) return;
            boardRenderer.renderBoard(gameBoard.getGameBoard(), inputReceiver);
            const result = checkWin(gameBoard.getGameBoard());
            if (result == "tie") {
                ui.tie();
                gameRunning = false;
                return;
            }
            if (result) {
                ui.showWinner(players[currentPlayer].getName());
                gameRunning = false;
            }
            currentPlayer = (currentPlayer + 1) % 2;
        }
        return { startGame, receiveInput, clearGame };
    }

    function inputReceiver(input) {
        gameManager.receiveInput(input);
    }

    function checkWin(boardArr) {
        //Check 1---
        if (boardArr[0] != " " && boardArr[0] == boardArr[1] && boardArr[0] == boardArr[2]) return boardArr[0];

        //Check 1|
        if (boardArr[0] != " " && boardArr[0] == boardArr[3] && boardArr[0] == boardArr[6]) return boardArr[0];

        //Check \
        if (boardArr[0] != " " && boardArr[0] == boardArr[4] && boardArr[0] == boardArr[8]) return boardArr[0];

        //Check 2|
        if (boardArr[1] != " " && boardArr[1] == boardArr[4] && boardArr[1] == boardArr[7]) return boardArr[1];

        //Check 3|
        if (boardArr[2] != " " && boardArr[2] == boardArr[5] && boardArr[2] == boardArr[8]) return boardArr[2];

        //Check /
        if (boardArr[2] != " " && boardArr[2] == boardArr[4] && boardArr[2] == boardArr[6]) return boardArr[2];

        //Check 2---
        if (boardArr[3] != " " && boardArr[3] == boardArr[4] && boardArr[3] == boardArr[5]) return boardArr[3];

        //Check 3---
        if (boardArr[6] != " " && boardArr[6] == boardArr[7] && boardArr[6] == boardArr[8]) return boardArr[6];

        if (boardArr.every((val) => val != ' ')) return "tie";

        return false;
    }

    function createPlayer(name, marker) {
        const getMarker = () => {
            return marker;
        }

        const getName = () => {
            return name;
        }

        return { getMarker, getName };
    }

    function createGameBoard() {
        const arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

        const markPosition = (pos, marker) => {
            if (arr[pos] != ' ') return false;
            arr[pos] = marker;
            return true;
        }

        const clearBoard = () => {
            arr.fill(' ');
        }

        const getGameBoard = () => { return arr };
        return { markPosition, getGameBoard, clearBoard };
    }


})(BoardRenderer);
