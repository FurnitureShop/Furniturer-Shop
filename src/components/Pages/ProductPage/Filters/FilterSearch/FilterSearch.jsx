import React from "react";
import "./FilterSearch.scss"
import { Form, Input } from "antd";

const FilterSearch = () => {

    return (
        <div className="filter-by-search">
            <Form>
                <Input placeholder="Search" bordered={false} />
            </Form>
        </div>
    )
}

export default FilterSearch