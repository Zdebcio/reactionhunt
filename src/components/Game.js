import React, { Component } from "react";
import Field from "./Field";

import "../styles/Game.scss";

class Game extends Component {
  state = {
    fieldsInGame: [],
    fieldsNumber: 4,
    points: 0,
    level: 1,
    clickedField: false,
    clickedFieldId: null
  };

  componentDidMount() {
    const { gameMode } = this.props;
    const fields = [
      { id: 1, isTrue: false },
      { id: 2, isTrue: false },
      { id: 3, isTrue: false },
      { id: 4, isTrue: false }
    ];
    if (gameMode === 0 || gameMode === 1) {
      fields[Math.floor(Math.random() * fields.length)].isTrue = true;
      this.setState({
        fieldsInGame: fields,
        fieldsNumber: 4
      });
    } else if (gameMode === 2) {
      fields.push({ id: 5, isTrue: false });
      fields.push({ id: 6, isTrue: false });
      fields[Math.floor(Math.random() * fields.length)].isTrue = true;
      this.setState({
        fieldsInGame: fields,
        fieldsNumber: 6
      });
    }
  }

  handleClickField = fieldId => {
    if (!this.state.clickedField)
      this.setState({
        clickedField: true,
        clickedFieldId: fieldId
      });
  };

  render() {
    const {
      fieldsInGame,
      points,
      level,
      clickedField,
      clickedFieldId
    } = this.state;
    const fields = fieldsInGame.map(field => (
      <Field
        key={field.id}
        field={field}
        handleClickField={this.handleClickField}
        clickedField={clickedField}
        clickedFieldId={clickedFieldId}
      />
    ));
    return (
      <main className="content game">
        <div className="game__counter"></div>
        <section className="game__stats">
          <h2 className="game__title">{points}</h2>
          <h3 className="game__title game__title--small">Poziom {level}</h3>
        </section>
        <section className="game__board">{fields}</section>
      </main>
    );
  }
}

export default Game;
