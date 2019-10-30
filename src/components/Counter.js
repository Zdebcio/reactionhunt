import React from "react";

const Counter = props => {
  const { clickedField, isLevelRender } = props;

  const styles =
    !clickedField && isLevelRender
      ? { color: "red", animationName: "counter" }
      : {};

  return <div style={styles} className="game__counter"></div>;
};

export default Counter;
