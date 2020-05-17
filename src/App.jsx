import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import Player from "./components/Player.jsx";
import Board from "./components/Board.jsx";

function App() {
  return (
    <Container id="main">
      <Row className="header">
        <h1>TIC TAC TOE GAME</h1>
      </Row>

      <Row className="main-body">
        <Col className="playerScoreCol" sm="3">
          <Player player="dipz" score="5" />
        </Col>

        <Col className="game-col" sm="6">
          <Board />
        </Col>

        <Col className="playerScoreCol" sm="3">
          <Player player="ola" score="900" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
