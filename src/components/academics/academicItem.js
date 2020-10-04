import React from "react";
const AcademicItem = (props) => {
  return (
    <div key={props.academic.type}>
      <label>{props.academic.type}</label>
      <div>
        <input
          type="text"
          placeholder="Board Name"
          name="board"
          value={props.details.board}
          // onChange={props.changeHandler}
          onBlur={props.changeHandler}
        />
        <input
          type="text"
          placeholder="Board Percentage"
          name="percent"
          value={props.details.percentage}
          // onChange={ props.changeHandler}
          onBlur={props.changeHandler}
        />
      </div>
    </div>
  );
};

export default AcademicItem;
