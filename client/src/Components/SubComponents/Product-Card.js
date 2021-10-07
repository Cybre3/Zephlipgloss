import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SaleBadge from './SaleBadge';

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.product._id}`}>
      <Card className="product-card">
        <Card.Img variant="top" src={props.product.img} />
        { props.product.sale && <SaleBadge /> }
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          { props.product.sale && <Card.Text className="card-product-price">${ props.product.price.toFixed(2) }</Card.Text> } 
          <Card.Text bsPrefix="card-product-price">${ props.product.price.toFixed(2) }</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
 
export default ProductCard;