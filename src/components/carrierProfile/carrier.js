import React, { useState } from "react";
import InpDetails from "./InpDetails";

const Carrier = () => {
  const [counter, setCounter] = useState(false);

  const academics = ["HSC", "SSC", "Graduation"];
  return (
    <div>
      <h3> *** Carrier Details ***</h3>
      <input
        type="button"
        value="Add Carrier"
        onClick={() => {
          setCounter({ counter: true });
        }}
      />
      {/* Getting Details from user and update into object array */}
      {counter ? <InpDetails higherSecondaryTitle={academics} /> : null}
    </div>
  );
};

export default Carrier;
