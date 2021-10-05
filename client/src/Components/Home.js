import React, { useState, useEffect } from "react";
import axios from 'axios';
import PinkButton from "./SubComponents/Button";
import ProductCard from "./SubComponents/Product-Card";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/lip-products/")
        .then((response) => {
        setProducts(response.data);
        });
    }, []);

    const top3LipProducts = products
    .map(product => (
        <ProductCard
        product={product}
        key={product._id}
        location={`/product/${product._id}`}
        />
    ))

    return (
        <div>
            <div className="container" >
                <h1>Making Beauty Personal</h1>
                <h4>Organic Lip Gloss, Scrub, Oil, & Body Butter</h4>
                <div style={{ display: "flex", justifyContent: "center", alignItems:  "center" }}>
                    <PinkButton action="Shop Now" location="/shop"/>
                </div>
            </div>

            <div className="products-grid-container">
                {top3LipProducts}
            </div>

        </div>
        
    );
}
 
export default Home;