import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Board(props) {
  const { stateOfBoard, xTurn, onClickSquare } = props;

  const renderSquare = (index) => {
    return (
      <Square
        value={stateOfBoard[index]}
        onClick={() => onClickSquare(index)}
      />
    );
  };

  return (
    <div>
      <span>It's your turn: {xTurn ? "X" : "O"} </span>

      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Square(props) {
  return (
    <Button className="square" onClick={props.onClick}>
      {props.value}
    </Button>
  );
}
