import React from "react";

const BackButton = props => {
  if (props.isBtnActive) {
    return (
      <button onClick={props.backToPrev} className="header__back-button">
        <i className="fas fa-arrow-left"></i>
      </button>
    );
  } else {
    return (
      <button className="header__back-button header__back-button--disabled">
        <i className="fas fa-arrow-left"></i>
      </button>
    );
  }
};

export default BackButton;
