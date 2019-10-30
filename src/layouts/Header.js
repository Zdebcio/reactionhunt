import React from "react";

import BackButton from "../components/BackButton";

import "../styles/Header.scss";

const Header = props => {
  let isBtnActive = true;
  if (props.prevComponent === props.activeComponent) {
    isBtnActive = false;
  }

  return (
    <header className="header">
      <h1 className="header__logo">
        Reaction<span className="header__logo--color">Hunt</span>
      </h1>
      <BackButton isBtnActive={isBtnActive} backToPrev={props.backToPrev} />
    </header>
  );
};

export default Header;
