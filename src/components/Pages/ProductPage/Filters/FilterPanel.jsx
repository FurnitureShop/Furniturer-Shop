import React from "react";
import "./FilterPanel.scss";
import FilterCategory from "./FilterCategory/FilterCategory";
import FilterSearch from "./FilterSearch/FilterSearch";
import FilterSort from "./FilterSort/FilterSort";
import FilterPrice from "./FilterPrice/FilterPrice";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterPanel = ({ onReset }) => {
  const [key, setKey] = useState(true);
  const navigate = useNavigate();
  const onClickReset = () => {};

  return (
    <aside>
      <div className="filter-panel flex flex-col gap-y-6">
        <FilterSearch />
        <FilterSort />
        <FilterCategory />
        <FilterPrice />

        <Button
          onClick={onReset}
          type="primary"
          className="filter-panel__btn mb-20"
        >
          Reset Filters
        </Button>
      </div>
    </aside>
  );
};

export default FilterPanel;
