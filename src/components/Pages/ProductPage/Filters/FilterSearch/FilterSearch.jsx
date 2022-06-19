import React from "react";
import "./FilterSearch.scss";
import { Form, Input } from "antd";
import useQuery from "hooks/useQuery";
import { useSearchParams } from "react-router-dom";

const FilterSearch = () => {
  const query = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value) => {
    let _filters = { ...query, name: value };

    setSearchParams(_filters);
  };

  return (
    <div className="filter-by-search">
      <Form>
        <Input
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search"
          bordered={false}
        />
      </Form>
    </div>
  );
};

export default FilterSearch;
