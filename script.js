console.log("script");

const BoardRenderer = ((boardArr) => {
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

function checkWin(boardArr)
{
    //Check 1---
    if(boardArr[0] == boardArr[1] && boardArr[0] == boardArr[2]) return boardArr[0];

    //Check 1|
    if(boardArr[0] == boardArr[3] && boardArr[0] == boardArr[6]) return boardArr[0];

    //Check \
    if(boardArr[0] == boardArr[4] && boardArr[0] == boardArr[8]) return boardArr[0];

    //Check 2|
    if(boardArr[1] == boardArr[4] && boardArr[1] == boardArr[7]) return boardArr[1];

    //Check 3|
    if(boardArr[2] == boardArr[5] && boardArr[2] == boardArr[8]) return boardArr[2];
    
    //Check /
    if(boardArr[2] == boardArr[4] && boardArr[2] == boardArr[6]) return boardArr[2];

    //Check 2---
    if(boardArr[3] == boardArr[4] && boardArr[3] == boardArr[5]) return boardArr[3];

    //Check 3---
    if(boardArr[6] == boardArr[7] && boardArr[6] == boardArr[8]) return boardArr[6];

}

const Game = ((boardRenderer) => {

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

        const markPosition = (marker, pos) => {
            arr[pos] = marker;
        }

        const getGameBoard = () => { return arr };

        return {markPosition, getGameBoard};
    }


    const gameBoard = createGameBoard();
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");

    console.log(player1.getName());
    console.log(player2.getName());
    player1.increaseScore();
    player1.increaseScore();
    player1.increaseScore();
    player2.increaseScore();
    console.log(player1.getName(), player1.getScore());
    console.log(player2.getName(), player2.getScore());
    boardRenderer.renderBoard(gameBoard.getGameBoard());
})(BoardRenderer);
