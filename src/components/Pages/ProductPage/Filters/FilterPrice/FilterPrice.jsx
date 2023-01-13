import { Form, Slider } from "antd";
import useQuery from "hooks/useQuery";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./FilterPrice.scss";

const FilterPrice = () => {
  const [value, setValue] = useState([0, 200]);
  const query = useQuery();
  const [, setSearchParams] = useSearchParams();

  const onAfterChange = (value) => {
    setValue(value);
  };

  const onApply = () => {
    let _filters = { ...query, minPrice: value[0], maxPrice: value[1] };

    setSearchParams(_filters);
  };

  return (
    <div className="filter-by-price">
      <h4>Price</h4>
      <Form>
        <div className="filter-by-price__slider">
          <Slider
            range={true}
            defaultValue={[query?.minPrice || 0, query?.maxPrice || 200]}
            min={0}
            max={200}
            tooltipPlacement="bottomLeft"
            handleStyle={{
              backgroundColor: "black",
            }}
            onAfterChange={onAfterChange}
          />
        </div>

        <div className="filter-by-price__display">
          <span>Price: $0.0 - $200.0</span>
          <button onClick={onApply} className="furniturer-link" type="submit">
            APPLY
          </button>
        </div>
      </Form>
    </div>
  );
};

export default FilterPrice;
