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
};

export default ProductDetails;
