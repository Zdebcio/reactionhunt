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
    props.setTimeout(visibleOff, 10);
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
    <div ref={ref} onClick={() => clickField(id)} className="game__field field">
      <i className="fas fa-eye"></i>
      {isCorrect()}
    </div>
  );
});

export default ReactTimeout(Field);

// class Field extends Component {
//     state = {};

//     visibleOff = () => {
//       const { id } = this.props.field;
//       const icon = document.querySelector(`.field:nth-child(${id}) .fa-eye`);
//       icon.style.display = "none";
//     };

//     visible = () => {
//       const { id } = this.props.field;
//       const icon = document.querySelector(`.field:nth-child(${id}) .fa-eye`);
//       icon.style.display = "block";
//       this.props.setTimeout(this.visibleOff, 10);
//     };

//     render() {
//       const { isTrue, id } = this.props.field;

//       if (isTrue && !this.props.clickedField) {
//         this.props.setTimeout(this.visible, 3000);
//       }

//       const isCorrect = () => {
//         if (this.props.clickedField) {
//           if (isTrue) {
//             return <i className="fas fa-check"></i>;
//           } else {
//             return <i className="fas fa-times"></i>;
//           }
//         } else {
//           return null;
//         }
//       };
//       return (
//         <div
//           onClick={() => this.props.handleClickField(id)}
//           className="game__field field"
//         >
//           <i className="fas fa-eye"></i>
//           {isCorrect()}
//         </div>
//       );
//     }
//   }
