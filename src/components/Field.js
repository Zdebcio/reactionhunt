import React, { Component } from "react";
import "../styles/Field.scss";
import ReactTimeout from "react-timeout";

let indexTimeout = null;

class Field extends Component {
  state = {
    isFieldVisible: false,
    firstVisibled: false
  };

  visibleOff = () => {
    this.setState({
      isFieldVisible: false
    });
  };

  visible = () => {
    this.setState({
      isFieldVisible: true,
      firstVisibled: true
    });
    this.props.setTimeout(this.visibleOff, 100);
  };

  startVisibleOn = () => {
    if (
      this.props.field.isTrue &&
      !this.props.clickedField &&
      !this.state.isFieldVisible
    ) {
      indexTimeout = this.props.setTimeout(this.visible, 3000);
    }
  };

  clickField = id => {
    this.props.handleClickField(id);
    this.props.clearTimeout(indexTimeout);
  };

  render() {
    const { isTrue, id } = this.props.field;
    const { fieldsNumber } = this.props;

    if (!this.state.firstVisibled) this.startVisibleOn();

    const isCorrect = () => {
      if (this.props.clickedField) {
        if (isTrue) {
          return <i className="fas fa-check"></i>;
        } else if (this.props.clickedFieldId === id) {
          return <i className="fas fa-times"></i>;
        } else {
          return null;
        }
      } else {
        return null;
      }
    };

    const lvlStyles = () => {
      const { level } = this.props;

      if (level > 10) {
        if (level > 20) {
          if (level > 30) {
            if (level > 40) {
              return {
                opacity: "0.05",
                fontSize: "2rem"
              };
            }
            return {
              opacity: "0.05",
              fontSize: "3rem"
            };
          }
          return {
            opacity: "0.2",
            fontSize: "4rem"
          };
        }
        return {
          opacity: "0.5"
        };
      }
    };

    return (
      <div
        className={
          fieldsNumber === 6
            ? "game__field field game__field--six"
            : "game__field field"
        }
        ref={this.ref}
        onClick={() => this.clickField(id)}
      >
        {this.state.isFieldVisible && (
          <i style={lvlStyles()} className="fas fa-eye"></i>
        )}
        {isCorrect()}
      </div>
    );
  }
}

export default ReactTimeout(Field);
