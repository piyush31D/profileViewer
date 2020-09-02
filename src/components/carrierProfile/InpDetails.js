import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { carrierDetails } from "../../actions";

const InpDetails = (props) => {
  const [formValue, setFormValue] = useState({
    HSCBoard: "",
    HSCPercent: "",
    SSCBoard: "",
    SSCPercent: "",
    GraduationBoard: "",
    GraduationPercent: "",
  });
  const dispatch = useDispatch();
  const onInputChangeHandler = (event) => {
    event.preventDefault();
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("formValue" + formValue);
    dispatch(carrierDetails(formValue));
  };
  const fillInput = props.higherSecondaryTitle.map((i, index) => {
    return (
      <div>
        <input
          placeholder={`${i}  Board`}
          key={index}
          type="text"
          name={`${i}Board`}
          onChange={(e) => onInputChangeHandler(e)}
        />

        <input
          placeholder={`${i} Percent`}
          // key={index}
          type="text"
          name={`${i}Percent`}
          onChange={(e) => onInputChangeHandler(e)}
        />
      </div>
    );
  });
  //``
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      {fillInput}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InpDetails;
