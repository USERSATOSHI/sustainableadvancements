const statusDisplay = document.querySelector(".status");

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation ()
{
    let roundWon = false;
    for ( let i = 0; i <= 7; i++ )
    {
        const winCondition = winningConditions[ i ];
        let a = gameState[ winCondition[ 0 ] ];
        let b = gameState[ winCondition[ 1 ] ];
        let c = gameState[ winCondition[ 2 ] ];
        if ( a === "" || b === "" || c === "" )
        {
            continue;
        }
        if ( a === b && b === c )
        {
            roundWon = true;
            document.querySelectorAll( ".cell" ).forEach( x =>
            {
                if ( winCondition.includes( parseInt(
                    x.getAttribute( "data-cell-index" ),
                ) )
                )
                {
                    x.style.color = `rgb( 211, 211, 211 )`;
                    x.style[ "background-color" ] = `rgb(44,44,44)`;
                }
            } );
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        statusDisplay.style.color = "rgb(251,200,204)";

        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        statusDisplay.style.color = "rgb(251,200,204)";
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute("data-cell-index"),
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.style.color = "rgb(211, 211, 211)";
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll( ".cell" ).forEach( ( cell ) =>
    {
        cell.innerHTML = "";
        cell.style.color = "";
        cell.style[ "background-color" ] = "";
    } );
}

document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.addEventListener("click", handleCellClick));
document.querySelector(".restart").addEventListener("click", handleRestartGame);
