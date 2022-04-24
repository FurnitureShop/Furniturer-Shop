import { Form, Select } from "antd";
import React from "react";
import "./FilterSort.scss"

const { Option } = Select;

const FilterSort = () => {

    return (
        <div className="filter-by-sort">
            <h4>Sorting</h4>
            <div className="filter-by-sort_content">
                <Form>
                    <Select
                        defaultValue={"default"}
                        bordered={false}
                        size={"large"}
                        style={{width: "100%"}}>
                        <Option value="default">Default Sorting</Option>
                        <Option value="latest">Sort by latest</Option>
                        <Option value="lowhigh">Sort by price: low to high</Option>
                        <Option value="highlow">Sort by price: high to low</Option>
                    </Select>
                </Form>
            </div>
        </div>
    )
}

export default FilterSort