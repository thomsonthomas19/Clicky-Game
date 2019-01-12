import React from "react";
import "./style.css";

function FighterCard(props) {
  return (
    <div
      className="card"
      value={props.id}
    >
      <div className="img-container"
        value={props.id}
        onClick={() => props.clickEvent(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FighterCard;
