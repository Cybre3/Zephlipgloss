import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductCard from "./SubComponents/Product-Card";

const Sale = () => {
    const [saleProducts, setSaleProducts] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5000/sale/")
      .then((response) => {
        console.log("response", response);
        setSaleProducts(response.data);
      });
    }, []);

    const saleProductsList = saleProducts
    .map(product => (
      <ProductCard
        product={product}
        key={product._id}
      />
    ))
    
    
    return (
        <div>
            <h1>Sale Page</h1>
            <div className="products-grid-container">
                {saleProductsList}
            </div>
        </div>
    );
}
 
export default Sale;