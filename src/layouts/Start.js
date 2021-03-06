import React, { Component } from "react";
import "../styles/Start.scss";
import GameOption from "../components/GameOption";

class Start extends Component {
  gameMods = [
    {
      number: 0,
      name: "Standardowy"
    },
    {
      number: 1,
      name: "Tylko 4 pola"
    },
    {
      number: 2,
      name: "Tylko 6 pól"
    }
  ];

  render() {
    const { gameMode } = this.props;

    const gameOptions = this.gameMods.map(mode => {
      return (
        <GameOption
          key={mode.number}
          gameMode={gameMode}
          mode={mode}
          selectMode={this.props.handleSelectMode}
        />
      );
    });

    return (
      <>
        <main className="content start">
          <section className="start__game-mode">
            <h2 className="start__title">Typ gry</h2>
            <ul className="start__game-list">{gameOptions}</ul>
          </section>
          <section className="start__bottom-section">
            <button
              onClick={() => this.props.changeComponent("rules")}
              className="start__rules-btn"
            >
              <i className="fas fa-question"></i>
            </button>
            <button
              onClick={() => this.props.changeComponent("game")}
              className="start__new-game-btn"
            >
              Start
            </button>
          </section>
        </main>
      </>
    );
  }
}

export default Start;
