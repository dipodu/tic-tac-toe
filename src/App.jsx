import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import Player from "./components/Player.jsx";
import Board from "./components/Board.jsx";

function App() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (index) => {
    const currentSquares = [...boardSquares];
    //check if square has already been clicked
    if (currentSquares[index] !== null) return;

    currentSquares[index] = xIsNext ? "X" : "O";
    setXisNext(!xIsNext);
    setBoardSquares(currentSquares);
  };

  return (
    <Container id="main">
      <Row className="justify-content-center">
        <h1>TIC TAC TOE GAME</h1>
      </Row>

      <Row
        style={{
          border: "dashed red",
          height: "80%",
          padding: "2em",
        }}
      >
        <Col style={{ border: "dashed yellow", padding: "1em" }} sm="3">
          <Player player="dipz" score="5" />
        </Col>

        <Col
          className="d-flex flex-column align-items-center"
          style={{ border: "dashed blue", padding: "1em" }}
          sm="6"
        >
          <Board
            stateOfBoard={boardSquares}
            xTurn={xIsNext}
            onClickSquare={handleClick}
          />
        </Col>

        <Col style={{ border: "dashed yellow", padding: "1em" }} sm="3">
          <Player player="ola" score="9" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
