import { Container, Row, Col } from 'react-bootstrap';
import BootstrapCarousel from './BootstrapCarousel';

const Product = () => {
    let sampleProduct = {
        _id: '1',
        name: 'Crystal',
        price: 10,
        description: {
          summary: 'Crystal clear gloss made with or without glitter and a delightful coconut scent. ',
          notifications: 'DOES NOT CONTAIN COCONUT OIL',
          ingredients: 'Versagel, Castor Oil, Organic Squalane Oil, Vitamin E  and coconut flavoring.'
        },
        inventory: 20,
        reviews: [ '' ],
        sale: false
      }

    return (
        <div>
            <Container fluid="sm">
                <Row>
                    <Col>All Products</Col>
                </Row>
                <Row>
                    <Col>
                        <BootstrapCarousel />
                    </Col>
                    <Col>Column 2 with Text Details</Col>
                    <Col>{sampleProduct.name}</Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Product;