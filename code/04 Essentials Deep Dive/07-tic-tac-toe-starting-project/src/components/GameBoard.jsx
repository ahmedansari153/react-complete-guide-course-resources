import {useState} from 'react';
export default function GameBoard({onSelectSquare, currentPlayer}) {
    const intialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    const [gameBoard, setGameBoard] = useState(intialGameBoard);
    function handleBoard(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const newBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            newBoard[rowIndex][colIndex] = currentPlayer;
            return newBoard;
        })
        onSelectSquare();
    }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=> (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, colIndex)=>
                            <li key={colIndex}>
                                <button onClick={() => handleBoard(rowIndex, colIndex)}>{symbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    );
}