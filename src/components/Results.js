import React from "react";

const Results = props => {
  const { points, level } = props;
  return (
    <section className="game__stats">
      <div className="game__results">
        <h2 className="game__title">{points}</h2>
        <h3 className="game__title game__title--small">Poziom {level}</h3>
      </div>
      <div className="game__complete">{props.finishLevel()}</div>
    </section>
  );
};

export default Results;
