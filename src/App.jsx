import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import Player from "./components/Player.jsx";
import Board from "./components/Board.jsx";

const player1URLImage = "./images/player1image.png";
const player2URLImage = "./images/player2image.png";

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const updateScore = (whoWon) => {
    if (whoWon === "X") {
      setPlayer1Score((count) => count + 1);
    } else if (whoWon === "O") {
      setPlayer2Score((count) => count + 1);
    }
  };

  return (
    <Container id="main">
      <Row className="header">
        <h1>TIC TAC TOE GAME</h1>
      </Row>

      <Row className="main-body">
        <Col className="playerScoreCol" sm="3">
          <Player
            player="Player1"
            score={player1Score}
            picture={player1URLImage}
          />
        </Col>

        <Col sm="6">
          <Board updateWinnerScore={updateScore} />
        </Col>

        <Col className="playerScoreCol" sm="3">
          <Player
            player="Player2"
            score={player2Score}
            picture={player2URLImage}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
