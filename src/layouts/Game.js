import React, { Component } from "react";
import Counter from "../components/Counter";
import Field from "../components/Field";

import "../styles/Game.scss";
import Results from "../components/Results";

class Game extends Component {
  state = {
    fieldsInGame: [],
    fieldsNumber: 4,
    points: 0,
    pointsPerRound: null,
    level: 1,
    clickedField: false,
    clickedFieldId: null,
    isLevelRender: false
  };

  renderNewLevel = () => {
    const { fieldsNumber } = this.state;
    const fields = [];

    for (let i = 0; i < fieldsNumber; i++) {
      fields.push({ id: i + 1, isTrue: false });
    }
    fields[Math.floor(Math.random() * fields.length)].isTrue = true;

    this.setState({
      fieldsInGame: fields
    });

    if (fields.length === 4) {
      this.setState({
        pointsPerRound: 2
      });
    } else if (fields.length === 6) {
      this.setState({
        pointsPerRound: 3
      });
    }
  };

  componentDidMount() {
    const { gameMode } = this.props;
    if (gameMode === 0 || gameMode === 1) {
      this.setState({
        fieldsNumber: 4
      });
    } else if (gameMode === 2) {
      this.setState({
        fieldsNumber: 6
      });
    }
  }

  componentDidUpdate() {
    const { clickedField, isLevelRender } = this.state;
    if (!clickedField && !isLevelRender) {
      this.renderNewLevel();
      this.setState({
        isLevelRender: true
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

  handleNextLevel = () => {
    const {
      pointsPerRound,
      fieldsInGame,
      clickedField,
      clickedFieldId,
      level
    } = this.state;
    const fields = [...fieldsInGame];
    const fieldWinId = fields.filter(field => field.isTrue);
    if (clickedField && clickedFieldId === fieldWinId[0].id)
      this.setState(prevState => ({
        clickedField: false,
        clickedFieldId: null,
        points: prevState.points + pointsPerRound,
        level: prevState.level + 1,
        isLevelRender: false
      }));

    if (this.props.gameMode === 0 && level === 10) {
      this.setState({ fieldsNumber: 6, pointsPerRound: 3 });
    }
  };

  handleResetGame = () => {
    this.setState({
      points: 0,
      level: 1,
      clickedField: false,
      clickedFieldId: null,
      isLevelRender: false
    });
  };

  finishLevel = () => {
    const { clickedField, clickedFieldId } = this.state;
    if (clickedField) {
      const fieldWinId = [...this.state.fieldsInGame].filter(
        field => field.isTrue
      );
      if (clickedFieldId === fieldWinId[0].id) {
        return (
          <>
            <span className="game__complete-title game__complete-title--win">
              Gratulacje, wygrałeś!
            </span>
            <button
              className="game__complete-button"
              onClick={this.handleNextLevel}
            >
              Następny poziom
            </button>
          </>
        );
      } else {
        return (
          <>
            <span className="game__complete-title game__complete-title--lose">
              Przegrałeś!
            </span>
            <button
              className="game__complete-button"
              onClick={this.handleResetGame}
            >
              Zagraj ponownie
            </button>
          </>
        );
      }
    } else {
      return null;
    }
  };

  render() {
    const {
      fieldsInGame,
      points,
      level,
      clickedField,
      clickedFieldId,
      fieldsNumber,
      isLevelRender
    } = this.state;

    const fields = fieldsInGame.map(field => (
      <Field
        key={field.id}
        field={field}
        handleClickField={this.handleClickField}
        clickedField={clickedField}
        clickedFieldId={clickedFieldId}
        fieldsNumber={fieldsNumber}
        level={level}
      />
    ));

    return (
      <main className="content game">
        <Counter clickedField={clickedField} isLevelRender={isLevelRender} />
        <div className="game__wrapper">
          <Results
            points={points}
            level={level}
            finishLevel={this.finishLevel}
          />
          <section className="game__board">
            {this.state.isLevelRender && fields}
          </section>
        </div>
      </main>
    );
  }
}

export default Game;
