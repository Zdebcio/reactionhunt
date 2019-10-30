import React from "react";
import "../styles/Header.scss";

const Header = props => {
  const backBtn = () => {
    if (props.prevComponent === props.activeComponent) {
      return (
        <button className="header__back-button header__back-button--disabled">
          <i className="fas fa-arrow-left"></i>
        </button>
      );
    } else {
      return (
        <button onClick={props.backToPrev} className="header__back-button">
          <i className="fas fa-arrow-left"></i>
        </button>
      );
    }
  };

  return (
    <header className="header">
      <h1 className="header__logo">
        Reaction<span className="header__logo--color">Hunt</span>
      </h1>
      {backBtn()}
    </header>
  );
};

export default Header;
