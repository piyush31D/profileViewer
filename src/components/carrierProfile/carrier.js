import { Button } from "antd";
import React, { useState } from "react";
const Carrier = () => {
  const [counter, setCounter] = useState(0);
  const handleAddCarrier = () => {
    setCounter(counter + 1);
    companyInpDetails(counter);
  };
  const companyInpDetails = (cnt) => {
    return (
      <div key={`comp{cnt}`}>
        <span>Company Name: </span>
        <input type="text" name="company" />
        <span>Start Date: </span>
        <input type="date" name="startDate" />
        <span>End Date: </span>
        <input type="date" name="endDate" />
      </div>
    );
  };
  return (
    <div>
      <h3> *** Carrier Details ***</h3>
      <div>
        <Button
          style={{ font: "bold", color: "blue", fontSize: "large" }}
          onClick={handleAddCarrier}
        >
          + Add Carrier
        </Button>
      </div>
      <form>{companyInpDetails}</form>
    </div>
  );
};
export default Carrier;
