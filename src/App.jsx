import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Player from "./components/Player.jsx";

function App() {
  return (
    <Container id="main">
      <Row className="justify-content-center">
        <h1>TIC TAC TOE GAME</h1>
      </Row>

      <Row style={{ border: "dashed red", height: "80%", padding: "2em" }}>
        <Col style={{ border: "dashed yellow", padding: "1em" }} sm="3">
          <Player player="dipz" score="5" />
        </Col>

        <Col style={{ border: "dashed blue", padding: "1em" }} sm="6">
          <span>"PLAYERS-NAME" It's your turn</span>
          <p>tic tac toe game</p>
        </Col>

        <Col style={{ border: "dashed yellow", padding: "1em" }} sm="3">
          <Player player="ola" score="9" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
