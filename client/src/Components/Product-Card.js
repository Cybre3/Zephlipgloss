import { Card } from "react-bootstrap";
import SaleBadge from './SaleBadge';

const ProductCard = () => {
  let sampleProduct = {
    _id: '1',
    name: 'Crystal',
    img: 'https://img1.wsimg.com/isteam/ip/98d8e522-d343-47fd-9248-a2483aa95966/ols/IMG_E3148%5B1%5D-0001.JPG/:/rs=w:724,h:966',
    price: 10,
    sale: true,
    inventory: 20,
    color: ["Glitter", "No Glitter"],
    tube: ["Wand Tube", "Squeeze Tube", "Lollipop Tube"],
    description: {
      summary: 'Crystal clear gloss made with or without glitter and a delightful coconut scent. ',
      notifications: 'DOES NOT CONTAIN COCONUT OIL',
      ingredients: 'Versagel, Castor Oil, Organic Squalane Oil, Vitamin E  and coconut flavoring.'
    },
    reviews: [ '' ],
  }

  return (
    <Card className="product-card">
      <Card.Img variant="top" src="https://img1.wsimg.com/isteam/ip/98d8e522-d343-47fd-9248-a2483aa95966/ols/IMG_E3148%5B1%5D-0001.JPG/:/rs=w:724,h:966" />
      { sampleProduct.sale && <SaleBadge /> }
      <Card.Body>
        <Card.Title>Crystal</Card.Title>
        { sampleProduct.sale && <Card.Text className="card-product-price">${sampleProduct.price.toFixed(2)}</Card.Text> } 
        <Card.Text bsPrefix="card-product-price">${sampleProduct.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
 
export default ProductCard;