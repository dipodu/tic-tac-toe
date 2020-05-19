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

  function updateScore(whoWon) {
    console.log(`THE WINNER IS:  ${whoWon}`);
  }

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
            onGameOver={updateScore}
          />
        </Col>

        <Col sm="6">
          <Board />
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
