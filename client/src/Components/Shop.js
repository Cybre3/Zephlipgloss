// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductCard from "./Product-Card";
import FilterButton from "./SubComponents/FilterButton";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:5000/product/")
    .then((response) => {
      setProducts(response.data);
    });
  }, []);

  const FILTER_MAP = {
    All: () => true,
    Sale: product => product.sale,
    Lip_Gloss: product => product.category === "lip-gloss",
    Lip_Oil: product => product.category === "lip-oil",
  }

  const FILTER_CATEGORIES = Object.keys(FILTER_MAP);

  const filterList = FILTER_CATEGORIES.map(category => (
    <FilterButton 
      key={category}
      category={category}
      isPressed={category === filter}
      setFilter={setFilter}
    />
  ))

  const productList = products
  .filter(FILTER_MAP[filter])
  .map(product => (
    <ProductCard
      product={product}
      key={product._id}
    />
  ))

  return (
    <div>
      <h3>All Products</h3>
      <div className="filter-buttons">
        {filterList}
      </div>
      <div className="products-grid-container">
        {productList}
      </div>
    </div>
  );
}
 
export default Shop;