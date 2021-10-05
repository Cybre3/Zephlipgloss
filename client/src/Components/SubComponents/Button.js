import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PinkButton = (props) => {
    return (
        <>
        <Link to={props.location}>
            <Button bsPrefix="pink-button">{props.action}</Button>
        </Link>
        </>
    );
}
 
export default PinkButton;