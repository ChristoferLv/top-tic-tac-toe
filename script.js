console.log("script");

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
    return { renderBoard };
})();


const Game = ((boardRenderer) => {
    const player1NameInput = document.querySelector("#player1")
    const player2NameInput = document.querySelector("#player2")

    const gameBoard = createGameBoard();
    const gameManager = createGameManager();

    const startButton = document.querySelector("#start-btn");
    startButton.addEventListener("click", gameManager.startGame);
    const clearButton = document.querySelector("#clear-btn");
    clearButton.addEventListener("click", gameManager.clearGame);
    const gameBoardContainer = document.querySelector(".game-board");
    const winnerP = document.querySelector(".winner");

    let gameRunning = false;

    let currentPlayer = null;
    let player1 = null;
    let player2 = null;
    let players = null
    currentPlayer = 0;

    
    function createGameManager() {
        const startGame = () => {
            if (player1NameInput.value == "" || player2NameInput.value == "") {
                alert("Digite os nomes dos jogadores");
                return;
            }
            boardRenderer.renderBoard(gameBoard.getGameBoard(), inputReceiver);
            player1 = createPlayer(player1NameInput.value, "X");
            player2 = createPlayer(player2NameInput.value, "O");
            players = [player1, player2];
            gameBoardContainer.classList.remove("hidden");
            clearButton.classList.remove("hidden");
            startButton.setAttribute("disabled", "");
            gameRunning = true;
        }

        const clearGame = () => {
            gameBoardContainer.classList.add("hidden");
            gameBoardContainer.innerText = '';
            player1 = null;
            player2 = null;
            players = [null, null];
            gameRunning = false;
            winnerP.classList.add("hidden");
            startButton.removeAttribute("disabled");
            clearButton.classList.add("hidden");
            gameBoard.clearBoard();
            currentPlayer = 0;
        }

        const receiveInput = (input) => {
            if (!gameRunning) return;
            const marked = gameBoard.markPosition(input, players[currentPlayer].getMarker());
            if (!marked) return;
            const result = checkWin(gameBoard.getGameBoard());
            if (result) {
                winnerP.innerText = "Round vencido por  " + players[currentPlayer].getName();
                winnerP.classList.remove("hidden");
                gameRunning = false;
            }
            currentPlayer = (currentPlayer + 1) % 2;
            boardRenderer.renderBoard(gameBoard.getGameBoard(), inputReceiver);
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
