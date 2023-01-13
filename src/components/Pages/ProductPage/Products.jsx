/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Products.scss";

import FilterPanel from "./Filters/FilterPanel";
import ProductList from "../../Product/ProductList";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  getProductByCategory,
  selectProduct,
} from "store/productSlice";
import { useState } from "react";
import { useEffect } from "react";
import useQuery from "hooks/useQuery";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const PRODUCT_PAGE_SIZE = 9;
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const [productsFilter, setProductFilter] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [productDataInPage, setProductDataInPage] = useState([]);

  const queryParam = useQuery();

  useEffect(() => {
    dispatch(getAllProduct());
  },[])

  useEffect(() => {
    if (!products || products.length === 0) {
      // dispatch(getAllProduct());
    } else {
      filterProduct();
    }
  }, [products]);

  const onPageIndexChange = (page, pageSize) => {
    setProductDataInPage(
      productsFilter.slice(
        (page - 1) * pageSize,
        (page - 1) * pageSize + PRODUCT_PAGE_SIZE
      )
    );
    setPageIndex(page);
  };

  useEffect(() => {
    //Filter by category
    if (queryParam.category) {
      dispatch(getProductByCategory(queryParam.category));
    } else {
      dispatch(getAllProduct());
    }
  }, [queryParam?.category]);

  const sortProduct = () => {
    let productsTempSort = [...products];
    let filterArray;
    switch (queryParam?.sort) {
      case "lowhigh":
        filterArray = productsTempSort.sort((first, second) => {
          return first.price - second.price;
        });
        break;
      case "highlow":
        filterArray = productsTempSort.sort((first, second) => {
          return second.price - first.price;
        });
        break;
      default:
        filterArray = products;
    }
    return filterArray;
  };

  const filterMinMaxPrice = (filterArray, minPrice, maxPrice) => {
    console.log(products)
    console.log(filterArray)
    return filterArray.filter((currentValue) => {
      return currentValue.price > minPrice && currentValue.price < maxPrice;
    });
  };

  const filterSearch = (filterArray, searchString) => {
    if (searchString) {
      return filterArray.filter((currentValue) => {
        return (
          currentValue.name.toLowerCase().search(searchString.toLowerCase()) >
          -1
        );
      });
    }
    return filterArray;
  };

  const filterProduct = () => {
    let filterArray;
    filterArray = sortProduct();

    filterArray = filterMinMaxPrice(
      filterArray,
      queryParam?.minPrice || 0,
      queryParam?.maxPrice || 200
    );

    filterArray = filterSearch(filterArray, queryParam?.name);
    setProductFilter(filterArray);
    setProductDataInPage(
      filterArray.slice(
        (pageIndex - 1) * PRODUCT_PAGE_SIZE,
        (pageIndex - 1) * PRODUCT_PAGE_SIZE + PRODUCT_PAGE_SIZE
      )
    );
  };

  useEffect(() => {
    //Sort
    filterProduct();
  }, [
    queryParam?.sort,
    queryParam?.minPrice,
    queryParam?.maxPrice,
    queryParam?.name,
  ]);

  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  //Make component remount with changing key
  const onReset = () => {
    navigate("/products");
    setKey(Math.floor(Math.random() * 1000));
  };

  return (
    <div>
      <main className="products furniturer-container">
        <section className="products--filters">
          <FilterPanel key={key} onReset={onReset} />
        </section>

        <div className="products--lists">
          <ProductList
            products={productDataInPage}
            sm={"sm:grid-cols-2"}
            lg={""}
            xl={"xl:grid-cols-3"}
          />

          <Pagination
            className="products--lists__pagination"
            total={productsFilter?.length}
            pageSize={PRODUCT_PAGE_SIZE}
            showSizeChanger={false}
            current={pageIndex}
            onChange={onPageIndexChange}
          />
        </div>
      </main>
    </div>
  );
};

export default Products;
