import React from "react";
import { Col, Card } from "react-bootstrap";

export default function Player(props) {
  const { player, score } = props;
  return (
    <Col style={{ width: "100%", height: "100%", border: "dashed pink" }}>
      {/* <h2>{player}</h2>
      <h5>{score}</h5> */}
      {/* style={{ width: "18rem" }} */}

      <Card
        className="d-flex flex-column align-items-center justify-content-center "
        style={{ width: "100%", height: "100%" }}
      >
        <Card.Title>{player}</Card.Title>

        <Card.Body>
          <span>Points</span>

          <Card.Text>{score}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
