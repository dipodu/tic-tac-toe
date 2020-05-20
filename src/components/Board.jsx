import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Board(props) {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [moveNumber, setMoveNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const { updateWinnerScore } = props;

  const handleClick = (index) => {
    const currentSquares = [...boardSquares];

    if (currentSquares[index] !== null) {
      return;
    } else if (calculateWinner(boardSquares)) {
      return;
    }
    moveMade();
    currentSquares[index] = xIsNext ? "X" : "O";
    setBoardSquares(currentSquares);
    setXisNext(!xIsNext);
  };

  useEffect(() => {
    //calculate if game is over
    const state = calculateWinner(boardSquares);
    const moves = moveNumber;

    const isGameFinished =
      state === "X" || state === "O" || (state === null && moves === 9)
        ? true
        : false;

    setIsGameOver(isGameFinished);
  }, [boardSquares]);

  useEffect(() => {
    //WHEN GAME IS OVER

    const result = calculateWinner(boardSquares);

    updateWinnerScore(result);
  }, [isGameOver]);

  const renderSquare = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };

  function moveMade() {
    setMoveNumber(moveNumber + 1);
  }

  function handleRestart() {
    const currentSquares = Array(9).fill(null);
    const xNext = true;
    setBoardSquares(currentSquares);
    setXisNext(xNext);
    setMoveNumber(0);
  }

  let status;
  const winner = calculateWinner(boardSquares);
  status = winner
    ? `${winner} IS THE WINNER`
    : moveNumber === 9
    ? "ITS A DRAW"
    : `It's your turn: ${xIsNext ? "X" : "O"}`;

  function Square(props) {
    return (
      <Button className="btn-dark" onClick={props.onClick}>
        <span className="cellXO">{props.value}</span>
      </Button>
    );
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

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

      <Button id="resetButton" className="btn-success" onClick={handleRestart}>
        RESET
      </Button>
    </div>
  );
}
