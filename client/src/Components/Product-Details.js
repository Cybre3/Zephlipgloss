import PinkButton from "./SubComponents/Button";

const ProductDetails = ({products}) => {
  return (
    <div className="container">

      <div className="row">
        <a href="/shop">All Products</a>
      </div>

      { products.map((product) => (
      <div className="row">
        <div className="col-sm">
          <div>
            <img className="product-img" src={product.img} alt={`lipgloss-${product.title}`} />
          </div>
        </div>
        {/* Add carousel here later */}

        <div className="col-sm">
          <h3 className="product-name-details-pg">{product.name}</h3>

          <p className="product-price-details-pg">${product.price.toFixed(2)}</p>

          <p className="product-instock">{product.inventory > 0 ? "In Stock" : "Out of Stock"}</p>

          <p className="description-text">{product.description.summary}</p>
          { product.description.notifications !== "" && <p className="description-text">{product.description.notifications}</p> }
          { product.description.ingredients !== "" &&<p className="description-text">Ingredients: {product.description.ingredients}</p> }

          <PinkButton action="Add to Cart" />
        </div>
      </div> ))}

    </div>
  );

  // return (

  // <div className="container">
  //   <div className="row">
  //     <a href="/">All Products</a>
  //   </div>
  //   <div className="row">
  //     <div className="col-sm">
  //       <div>
  //         <img className="product-img" src={product[0].img} alt={`lipgloss-${product.title}`} />
  //       </div>
  //     </div>
  //     {/* Add carousel here later */}

  //     <div className="col-sm">
  //       <h3 className="product-name-details-pg">{product.name}</h3>

  //       <p className="product-price-details-pg">${product.price}</p>

  //       <p className="product-instock">{product.inventory > 0 ? "In Stock" : "Out of Stock"}</p>

  //       <p className="select-type-lable">
  //         COLOR{" "}
  //         <select>
  //           {/* <option value={product.color[0]}>{product.color[0]}</option>
  //           <option value={product.color[1]}>{product.color[1]}</option> */}
  //         </select>
  //       </p>

  //       <p className="select-type-lable">
  //         TUBE{" "}
  //         <select>
  //           {/* <option value={product.tube[0]}>{product.tube[0]}</option>
  //           <option value={product.tube[1]}>{product.tube[1]}</option>
  //           <option value={product.tube[2]}>{product.tube[2]}</option> */}
  //         </select>
  //       </p>

  //       <p className="select-type-lable">
  //         Quantity{" "}
  //         <select>
  //           <option value="1">1</option>
  //           <option value="2">2</option>
  //           <option value="3">3</option>
  //           <option value="4">4</option>
  //           <option value="5">5</option>
  //         </select>
  //       </p>

  //       {/* {description.map((item) => (
  //         <p>{item}</p>
  //       ))} */}

  //       <PinkButton action="Add to Cart" />
  //     </div>
  //   </div>
  // </div>
  //);
};

export default ProductDetails;
