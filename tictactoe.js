let cells = document.getElementsByClassName('cell');
let xTurn = true;
let gameOver = false;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

let repeat = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', () => {
            if (!gameOver && !cells[i].textContent) {
                if (xTurn) {
                    cells[i].textContent = 'X';
                } else {
                    cells[i].textContent = 'O';
                }
                xTurn = !xTurn;

                for (const winning of winningCombinations) {
                    let [a, b, c] = winning
                    if (
                        cells[a].textContent &&
                        cells[a].textContent === cells[b].textContent &&
                        cells[b].textContent === cells[c].textContent
                    ) {
                        alert(cells[a].textContent + ' wins!');
                        gameOver = true;
                        setTimeout(askToPlayAgain, 100);
                    } else if (!gameOver && Array.from(cells).every(cell => cell.textContent)) {
                        alert('It\'s a draw!');
                        gameOver = true;
                        setTimeout(askToPlayAgain, 100);
                    }
                }
            }
        });
    }
}

function askToPlayAgain() {
    let choice = prompt("Do you want to play again? (Y/N)");

    if (choice && choice.toLowerCase() === 'y') {
        resetGame();
    } else {
        alert("Thanks for playing!");
    }
}

function resetGame() {
    // Clear the board and reset game variables
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    xTurn = true;
    gameOver = false;
}

// Start the game
repeat();

