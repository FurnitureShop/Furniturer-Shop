import React from "react";
import "./FilterCategory.scss"

const categoriesArr = ["Bathroom", "Creative", "Decorative", "Home"]

const FilterCategory = () => {


    return (
        <div>
            <div>
                <h4>Categories</h4>
                <ul>
                    {categoriesArr.map((item, index) => 
                        <li key={index}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default FilterCategory