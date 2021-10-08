import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SaleBadge from './SaleBadge';

const ProductCard = (props) => {
  return (
    <Link to={props.location}>
      <Card className="product-card">
        <Card.Img variant="top" src={props.img} />
        { props.sale && <SaleBadge /> }
        <Card.Body>
          {/* <Card.Title>{props.name}</Card.Title>
          { props.sale && <Card.Text className="card-product-price">${ props.price.toFixed(2) }</Card.Text> } 
          <Card.Text bsPrefix="card-product-price">${ props.price.toFixed(2) }</Card.Text> */}
        </Card.Body>
      </Card>
    </Link>
  );
}
 
export default ProductCard;