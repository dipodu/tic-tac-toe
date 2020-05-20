import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Board(props) {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [moveNumber, setMoveNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const { updateWinnerScore } = props;

  useEffect(() => {
    //calculate if game is over
    const state = calculateWinner(boardSquares);
    const isGameFinished =
      state === "X" || state === "O" || (state === null && moveNumber === 9)
        ? true
        : false;

    setIsGameOver(isGameFinished);
  }, [boardSquares]);

  useEffect(() => {
    //updates score of the winner
    const result = calculateWinner(boardSquares);
    updateWinnerScore(result);
  }, [isGameOver]);

  const handleClick = (squareClicked) => {
    const currentSquares = [...boardSquares];

    if (
      currentSquares[squareClicked] !== null ||
      calculateWinner(boardSquares)
    ) {
      return;
    }
    moveMade();
    currentSquares[squareClicked] = xIsNext ? "X" : "O";
    setBoardSquares(currentSquares);
    setXisNext(!xIsNext);
  };

  const moveMade = () => {
    setMoveNumber((increase) => increase + 1);
  };

  const renderSquare = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    );
  };

  const handleRestart = () => {
    const currentSquares = Array(9).fill(null);
    setBoardSquares(currentSquares);
    setXisNext(true);
    setMoveNumber(0);
  };

  const calculateWinner = (currentBoardState) => {
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
        currentBoardState[a] &&
        currentBoardState[a] === currentBoardState[b] &&
        currentBoardState[b] === currentBoardState[c]
      ) {
        return currentBoardState[a];
      }
    }
    return null;
  };

  const Square = (props) => {
    return (
      <Button className="btn-dark" onClick={props.onClick}>
        <span className="cellXO">{props.value}</span>
      </Button>
    );
  };

  const winner = calculateWinner(boardSquares);
  let status = winner
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
      <Button id="resetButton" className="btn-success" onClick={handleRestart}>
        Reset Game
      </Button>
    </div>
  );
}
