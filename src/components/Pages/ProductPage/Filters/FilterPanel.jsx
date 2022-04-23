import React from "react";
import "./FilterPanel.scss"
import FilterSearch from "./FilterSearch/FilterSearch";
import FilterSort from "./FilterSort/FilterSort";

const FilterPanel = () => {
    return (
        <section>
            <div>
                <FilterSearch />
                <FilterSort />
                
            </div>
        </section>
    )
}

export default FilterPanel;