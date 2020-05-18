import React from "react";
import { Col, Card } from "react-bootstrap";

export default function Player(props) {
  const { player, score, picture } = props;
  return (
    <Col className="playerCol">
      <div className="card">
        <div className="image">
          <img src={picture} className="imagePic" />
        </div>
        <div className="card-inner">
          <div className="header">
            <h2>{player}</h2>
          </div>
          <div className="playerScore">
            <p>{score}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
