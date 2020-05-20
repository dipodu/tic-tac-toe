import React from "react";
import { Col } from "react-bootstrap";

export default function Player(props) {
  const { playerName, score, picture } = props;
  return (
    <Col>
      <div className="card">
        <div className="image">
          <img src={picture} className="imagePic" alt="playerTitle" />
        </div>
        <div className="card-inner">
          <div className="header">
            <h2>{playerName}</h2>
          </div>
          <div className="playerScore">
            <p>{score}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
