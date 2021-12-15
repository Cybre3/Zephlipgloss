import ProductList from "./SubComponents/ProductList";
import FilterButton from "./SubComponents/FilterButton";
import useFetch from "./useFetch";
import { useState } from "react";
require("dotenv").config();

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const { data: products } = useFetch(`${process.env.REACT_APP_API_URL}/product/`);

  const FILTER_MAP = {
    All: () => true,
    Sale: (product) => product.sale,
    Lip_Gloss: (product) => product.category === "lip-gloss",
    Lip_Oil: (product) => product.category === "lip-oil",
    Lip_Scrub: (product) => product.category === "lip-scrub",
  };

  const FILTER_CATEGORIES = Object.keys(FILTER_MAP);

  const filterList = FILTER_CATEGORIES.map((category) => (
    <FilterButton
      key={category}
      category={category}
      isPressed={category === filter}
      setFilter={setFilter}
    />
  ));

  const productList = products.filter(FILTER_MAP[filter])

  return (
    <div>
      <h3>All Products</h3>
      <div className="filter-buttons">{filterList}</div>
      <div className="products-grid-container">
        <ProductList products={productList} />
      </div>
    </div>
  );
};

export default Shop;
