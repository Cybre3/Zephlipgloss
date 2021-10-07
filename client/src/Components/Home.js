import { useState } from "react";
import ProductList from "./SubComponents/ProductList";
import PinkButton from "./SubComponents/Button";
import useFetch from "./SubComponents/useFetch";

const Home = () => {
  const { data: products } = useFetch("http://localhost:5000/product");

  const top3LipProducts = products.filter((product) => product.orders > 4);
  console.log(top3LipProducts)

  return (
    <div>
      <div className="container">
        <h1>Making Beauty Personal</h1>
        <h4>Organic Lip Gloss, Scrub, Oil, & Body Butter</h4>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <PinkButton action="Shop Now" location="/shop" />
        </div>
      </div>
      <ProductList products={top3LipProducts} />
    </div>
  );
};

export default Home;