import React from "react";

const GameOption = props => {
  return (
    <li
      onClick={() => props.selectMode(props.mode.number)}
      className={
        props.gameMode === props.mode.number
          ? "start__game-option active"
          : "start__game-option"
      }
    >
      {props.mode.name}
    </li>
  );
};

export default GameOption;
