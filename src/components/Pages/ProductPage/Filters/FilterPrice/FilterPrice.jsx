import { Form, Slider } from "antd";
import React from "react";
import "./FilterPrice.scss"

const FilterPrice = () => {

    return (
        <div className="filter-by-price">
            <h4>Price</h4>
            <Form>
                <div className="filter-by-price__slider">
                    <Slider
                        range={true}
                        defaultValue={[0, 200]}
                        min={0}
                        max={200}
                        tooltipVisible={false}
                        handleStyle={{
                            backgroundColor: "black"
                        }} />
                </div>

                <div className="filter-by-price__display">
                    <span>Price: $0.0 - $200.0</span>
                    <button
                        className="furniturer-link"
                        type="submit">
                        APPLY    
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default FilterPrice