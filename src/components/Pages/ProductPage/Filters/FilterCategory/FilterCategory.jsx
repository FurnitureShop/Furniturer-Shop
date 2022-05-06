import React from "react";
import "./FilterCategory.scss"
import { Link } from "react-router-dom";

const categoriesArr = ["Bathroom", "Creative", "Decorative", "Home", "Plants", "Design",
                        "Furniture", "Houseplant", "Kitchen", "Light", "Living room", "Office Plants"]

const FilterCategory = () => {


    return (
        <div className="filter-by-category">
            <h4>Categories</h4>
            <ul>
                {categoriesArr.map((item, index) =>
                    <li className="filter-by-category__item" key={index}>
                        <Link
                            to={"/products"}
                            style={{fontFamily: "Poppins", textTransform: 'capitalize'}}>{item}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FilterCategory