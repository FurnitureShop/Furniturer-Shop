import { Checkbox } from 'antd'
import React from 'react'

const CheckboxControl = (props) => {

    return (
        <div className={`${props.customClassName}`}>
            <Checkbox
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    fontSize: "17px",
                    lineHeight: 1.5
                }}
            >
                {props.label}
            </Checkbox>
        </div>
    )
}

export default CheckboxControl