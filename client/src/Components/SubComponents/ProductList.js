import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import SaleBadge from "./SaleBadge";

const ProductList = ({products}) => {
  return (
    <div className="products-grid-container">
      {products.map((product) => (
        <Link to={`/product/${product._id}`}>
          <Card className="product-card">
            <Card.Img variant="top" src={product.img} />
            {product.sale && <SaleBadge />}
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              {product.sale && (
                <Card.Text className="card-product-price">${product.price.toFixed(2)}</Card.Text>
              )}
              <Card.Text bsPrefix="card-product-price">${product.price.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;