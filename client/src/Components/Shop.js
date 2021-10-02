import React, { Component } from "react";
import axios from 'axios';
import ProductCard from "./Product-Card";

export default class AllProducts extends Component {
  // Constructor stores data from database
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/product/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  productList() {
    return this.state.products.map((currentProduct) => {
      return (
        <ProductCard
          product={currentProduct}
          key={currentProduct._id}
        />
      );
    }); 
  }

  render() {
    return (
      <div>
        <h3>All Products</h3>
        <div className="products-grid-container">
          {this.productList()}
        </div>
      </div>
    );
  }
}