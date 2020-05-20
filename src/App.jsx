import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Player from "./components/Player.jsx";
import Board from "./components/Board.jsx";

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const updateScore = (whoWonTheGame) => {
    if (whoWonTheGame === "X") {
      setPlayer1Score((score) => score + 1);
    } else if (whoWonTheGame === "O") {
      setPlayer2Score((score) => score + 1);
    }
  };

  return (
    <Container fluid id="main">
      <Row className="main-body">
        <Col className="playerScoreCol" sm="3">
          <Player
            playerName="Player1"
            score={player1Score}
            picture="./images/player1image.png"
          />
        </Col>

        <Col sm="6">
          <Board updateWinnerScore={updateScore} />
        </Col>

        <Col className="playerScoreCol" sm="3">
          <Player
            playerName="Player2"
            score={player2Score}
            picture="./images/player2image.png"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
