import { useState } from "react";
import { WINNING_COMBINATIONS } from './winning-combinations.js'

const initialGameBoard = [

    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard({ onSelectSquare, activeplayersymbol }) {
    const [gameBoard, setgameBoard] = useState(initialGameBoard);
    const [winner, setWinner] = useState(null); // Add this line

    function handleSelectSquare(rowIndex, colIndex) {
        setgameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activeplayersymbol;
            CheckWinner();
            return updatedBoard;
        });


    }

    function CheckWinner() {
        for (const combinations of WINNING_COMBINATIONS) {
            const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
            const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
            const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

            if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
                setWinner(firstSquareSymbol);
            }
        }
    }
    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)}
            </ol>
        </li>)}

    </ol>

}