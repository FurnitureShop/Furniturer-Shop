import React from "react";
import "./QuantityControl.scss";
import { useController } from "react-hook-form";

//  -1: disable minus
// 0: not disable
//  1: disable plus
const QuantityControl = ({ value, onUpdate, disable }) => {
  //const { field } = useController({name, control})

  //const { value, onChange } = field

  return (
    <div className="quantitycontrol">
      <span
        onClick={() => onUpdate(value - 1)}
        className={`quantity__minus ${
          disable === -1 ? "quantity__disable" : ""
        }`}
      >
        &#x02212;
      </span>

      <input
        className="quantity--input"
        inputMode="numeric"
        value={value}
        defaultValue={1}
      />

      <span
        onClick={() => onUpdate(value + 1)}
        className={`quantity__plus ${disable === 1 ? "quantity__disable" : ""}`}
      >
        &#x0002B;
      </span>
    </div>
  );
};

export default QuantityControl;
