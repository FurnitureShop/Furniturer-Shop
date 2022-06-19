import { Form, Select } from "antd";
import useQuery from "hooks/useQuery";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./FilterSort.scss";

const { Option } = Select;

const FilterSort = () => {
  const query = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSelect = (value) => {
    let _filters = { ...query, sort: value };

    setSearchParams(_filters);
  };

  return (
    <div className="filter-by-sort">
      <h4>Sorting</h4>
      <div className="filter-by-sort__content">
        <Form>
          <Select
            onSelect={onSelect}
            defaultValue={searchParams.get("sort") || "default"}
            bordered={false}
            size={"large"}
            style={{ width: "100%" }}
          >
            <Option value="default">Default Sorting</Option>
            <Option value="lowhigh">Sort by price: low to high</Option>
            <Option value="highlow">Sort by price: high to low</Option>
          </Select>
        </Form>
      </div>
    </div>
  );
};

export default FilterSort;
