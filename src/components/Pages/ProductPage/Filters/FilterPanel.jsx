import React from "react";
import FilterCategory from "./FilterCategory/FilterCategory";
import "./FilterPanel.scss"
import FilterSearch from "./FilterSearch/FilterSearch";
import FilterSort from "./FilterSort/FilterSort";

const FilterPanel = () => {
    return (
        <aside>
            <div className="filter-panel flex flex-col gap-y-7">
                <FilterSearch />
                <FilterSort />
                <FilterCategory />
            </div>
        </aside>
    )
}

export default FilterPanel;