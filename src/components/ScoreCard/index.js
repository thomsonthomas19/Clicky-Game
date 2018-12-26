import React from "react";
import "./style.css";

const ScoreCard = props => (
  <div>
        <h1>{props.title}</h1>
    <ul>

      <li id="rw">{props.msg}</li>

      <li>Current Score: {props.curscore}</li>

      <li>High Score: {props.highScore}</li>
    </ul>
  </div>
);

export default ScoreCard;