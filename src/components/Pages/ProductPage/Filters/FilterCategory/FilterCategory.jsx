import React from "react";
import "./FilterCategory.scss";
import { Link, useLocation } from "react-router-dom";
import useQuery from "hooks/useQuery";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ENP_GET_ALL_CATEGORIES } from "api/EndPoint";
import queryString from "query-string";
import path from "Paths/Path";

const FilterCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + ENP_GET_ALL_CATEGORIES)
      .then((response) => {
        setCategories(response.data.category);
      });
  }, []);

  const query = useQuery();

  const isActive = (name) => {
    return query.category === name;
  };

  const defaultStyle = {
    fontFamily: "Poppins",
    textTransform: "capitalize",
  };

  const setLinkPath = (name) => {
    let _filters;
    if (query.category === name) {
      _filters = { ...query };
      delete _filters.category;
    } else {
      _filters = { ...query, category: name };
    }
    return path.products.route + "?" + queryString.stringify(_filters);
  };

  return (
    <div className="filter-by-category">
      <h4>Categories</h4>
      <ul>
        {categories?.map((item, index) => (
          <li className="filter-by-category__item" key={index}>
            <Link
              to={setLinkPath(item.name)}
              style={
                isActive(item.name)
                  ? { color: "black", ...defaultStyle }
                  : defaultStyle
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;
