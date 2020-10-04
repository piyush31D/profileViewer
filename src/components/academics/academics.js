import React from "react";
import AcademicItem from "./academicItem";
const Academics = (props) => {
  console.log("Academics ", props);
  return props.academicItems.map((academic, index) => {
    return (
      <AcademicItem
        academic={academic}
        key={index}
        changeHandler={(event) => props.changeHandler(event)}
        details={props.details}
      />
    );
  });
};

export default Academics;
