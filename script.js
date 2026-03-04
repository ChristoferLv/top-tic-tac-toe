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

const BoardRendererConsole = (() => {
    const renderBoard = (boardArr) => {
        console.log(`                     _________
                     |${boardArr[0]}||${boardArr[1]}||${boardArr[2]}|
                     ---------
                     |${boardArr[3]}||${boardArr[4]}||${boardArr[5]}|
                     ---------
                     |${boardArr[6]}||${boardArr[7]}||${boardArr[8]}|
                     ---------`);
    }
    return { renderBoard };
})();

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

    return false;
}

const Game = ((boardRenderer) => {

    const gameBoard = createGameBoard();
    let currentPlayer = null;
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
    const players = [player1, player2];
    currentPlayer = 0;

    function inputReceiver(input) {
        const marked = gameBoard.markPosition(input, players[currentPlayer].getMarker());
        if (!marked) return;
        const result = checkWin(gameBoard.getGameBoard());
        if (result) {
            const winnerP = document.querySelector(".winner");
            players[currentPlayer].increaseScore();
            winnerP.innerText = "Round vencido por  " + players[currentPlayer].getName();
            winnerP.classList.remove("hidden");
        }
        currentPlayer = (currentPlayer + 1) % 2;
        boardRenderer.renderBoard(gameBoard.getGameBoard(), inputReceiver);
    }

    function createPlayer(name, marker) {
        let score = 0;

        const increaseScore = () => {
            score = score + 1;
        }

        const getScore = () => {
            return score;
        }

        const getMarker = () => {
            return marker;
        }

        const getName = () => {
            return name;
        }

        return { increaseScore, getScore, getMarker, getName };
    }

    function createGameBoard() {
        const arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

        const markPosition = (pos, marker) => {
            if (arr[pos] != ' ') return false;
            arr[pos] = marker;
            return true;
        }

        const getGameBoard = () => { return arr };

        return { markPosition, getGameBoard };
    }

    boardRenderer.renderBoard(gameBoard.getGameBoard(), inputReceiver);

})(BoardRenderer);
