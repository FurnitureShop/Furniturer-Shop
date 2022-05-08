import React from "react";
import "./QuantityControl.scss"
import { useController } from "react-hook-form";


const QuantityControl = ({ name, control}) => {
    //const { field } = useController({name, control})

    //const { value, onChange } = field

    return (
        <div className="quantitycontrol">
            <span className="quantity__minus">
                &#x02212;
            </span>

            <input
                className="quantity--input"
                inputMode="numeric"
                />

            <span className="quantity__plus">
                &#x0002B;
            </span>
        </div>
    )
}

export default QuantityControl