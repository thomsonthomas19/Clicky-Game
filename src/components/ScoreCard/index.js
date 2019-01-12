import React from "react";
import "./style.css";

function ScoreCard(props) {

  return (
  <div className = "scorecard">
        <h1
        className = "text-center">{props.title}</h1>
        <br/>
    <div
    className = "row">

      <h3 className = "col-4 text-center">Current Score: {props.curScore} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>

      <h3 className = "col-4 text-center" id="rw">{props.msg}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>

      <h3 className = "col-4 text-center">High Score: {props.highScore}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
    </div>
  </div>
);
 }

export default ScoreCard;