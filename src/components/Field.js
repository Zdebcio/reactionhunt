import React from "react";
import "../styles/Field.scss";
import ReactTimeout from "react-timeout";

let indexTimeout = null;

const Field = React.forwardRef((props, ref) => {
  const { isTrue, id } = props.field;

  const visibleOff = () => {
    const icon = document.querySelector(`.field:nth-child(${id}) .fa-eye`);
    icon.style.display = "none";
  };

  const visible = () => {
    const icon = document.querySelector(`.field:nth-child(${id}) .fa-eye`);
    icon.style.display = "block";
    props.setTimeout(visibleOff, 100);
  };

  if (isTrue && !props.clickedField) {
    indexTimeout = props.setTimeout(visible, 3000);
  }

  const isCorrect = () => {
    if (props.clickedField) {
      if (isTrue) {
        return <i className="fas fa-check"></i>;
      } else if (props.clickedFieldId === id) {
        return <i className="fas fa-times"></i>;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  const clickField = id => {
    props.handleClickField(id);
    props.clearTimeout(indexTimeout);
  };

  return (
    <div
      className={
        props.fieldsNumber === 6
          ? "game__field field game__field--six"
          : "game__field field"
      }
      ref={ref}
      onClick={() => clickField(id)}
    >
      <i className="fas fa-eye"></i>
      {isCorrect()}
    </div>
  );
});

export default ReactTimeout(Field);
