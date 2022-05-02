import React from "react";
import "./FilterPanel.scss"
import FilterCategory from "./FilterCategory/FilterCategory";
import FilterSearch from "./FilterSearch/FilterSearch";
import FilterSort from "./FilterSort/FilterSort";
import FilterPrice from "./FilterPrice/FilterPrice";
import { Button } from "antd";


const FilterPanel = () => {
    return (
        <aside>
            <div className="filter-panel flex flex-col gap-y-6">
                <FilterSearch />
                <FilterSort />
                <FilterCategory />
                <FilterPrice />

                <Button
                    type="primary"
                    className="filter-panel__btn">
                    Reset Filters
                </Button>
            </div>
        </aside>
    )
}

export default FilterPanel;