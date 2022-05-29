import React from 'react'
import { Select } from 'antd'
import FloatLabel from '../FloatLabel/FloatLabel'

const { Option } = Select

const SelectControl = (props) => {
    return (
        <div className={`${props.customClassName}`}>
            <FloatLabel
                label={`${props.label}`}>
                <Select
                    defaultValue={"test"}
                    style={{
                        width: "100%"
                    }}>
                    <Option value="test">Test</Option>
                </Select>
            </FloatLabel>
        </div>
    )
}

export default SelectControl