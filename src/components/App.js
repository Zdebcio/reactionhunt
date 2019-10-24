import React, { Component } from "react";
import Start from "./Start";
import Rules from "./Rules";
import Header from "../layouts/Header";
import Game from "./Game";

import "../styles/App.scss";

class App extends Component {
  state = {
    gameMode: 0,
    activeComponent: "start",
    prevComponent: "start"
  };

  handleChangeActiveComponent = name => {
    this.setState(prevState => ({
      activeComponent: name,
      prevComponent: prevState.activeComponent
    }));
  };

  handleBackToPrevComponent = () => {
    this.setState(prevState => ({
      activeComponent: prevState.prevComponent
    }));
  };

  handleSelectMode = number => {
    this.setState({
      gameMode: number
    });
  };

  render() {
    const { gameMode, activeComponent, prevComponent } = this.state;

    const renderComponent = () => {
      switch (activeComponent) {
        case "start":
          return (
            <Start
              gameMode={gameMode}
              handleSelectMode={this.handleSelectMode}
              changeComponent={this.handleChangeActiveComponent}
            />
          );
        case "game":
          return <Game gameMode={gameMode} />;
        case "rules":
          return <Rules />;
        default:
          return null;
      }
    };

    return (
      <>
        <Header
          backToPrev={this.handleBackToPrevComponent}
          activeComponent={activeComponent}
          prevComponent={prevComponent}
        />
        {renderComponent()}
      </>
    );
  }
}

export default App;
