// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductCard from "./Product-Card";
import FilterButton from "./SubComponents/FilterButton";

// export default class AllProducts extends Component {
//   // Constructor stores data from database
//   constructor(props) {
//     super(props);
//     this.state = { products: [] };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/product/")
//       .then((response) => {
//         this.setState({ products: response.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   productList() {
//     return this.state.products.map((currentProduct) => {
//       return (
//         <ProductCard
//           product={currentProduct}
//           key={currentProduct._id}
//         />
//       );
//     }); 
//   }

//   showSaleItems() {
//     this.setState({
//       products: this.state.products.filter((product) => product.sale),
//     });
//   }

//   showLipGloss() {
//     this.setState({
//       products: this.state.products.filter((product) => product.category === "lip-gloss"),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h3>All Products</h3>
//         <button onClick={() => this.showSaleItems()}>SALE</button>
//         <button onClick={() => this.showLipGloss()}>Lip Gloss</button>
//         <div className="products-grid-container">
//           {this.productList()}
//         </div>
//       </div>
//     );
//   }
// }

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