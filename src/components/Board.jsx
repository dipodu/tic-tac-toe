import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import "../App.css";

export default function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [moveNumber, setMoveNumber] = useState(0);

  const handleClick = (index) => {
    const currentSquares = [...boardSquares];
    //check if square has already been clicked
    if (currentSquares[index] !== null || calculateWinner(boardSquares)) return;

    moveMade();
    currentSquares[index] = xIsNext ? "X" : "O";
    setBoardSquares(currentSquares);

    console.log(`Move Number:  ${moveNumber}`);
    // const isDraw = checkIfDraw(boardSquares);

    setXisNext(!xIsNext);
  };

  function moveMade() {
    setMoveNumber(moveNumber + 1);
  }

  const renderSquare = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };

  let status;
  const winner = calculateWinner(boardSquares);
  status = winner
    ? `${winner} IS THE WINNER`
    : moveNumber === 9
    ? "ITS A DRAW"
    : `It's your turn: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="tic-col">
      <div className="status">{status}</div>

      <div className="tic-game">
        <div className="tic-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="tic-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="tic-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

function Square(props) {
  return (
    <Button className="btn-dark" onClick={props.onClick}>
      <span className="cellXO">{props.value}</span>
    </Button>
  );
}

function checkIfDraw(squares) {
  return false;
}

function calculateWinner(squares) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    //Check to see if values in current square array matches any of the winning combinations
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
