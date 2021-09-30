import { Button } from 'react-bootstrap';

const PinkButton = (props) => {
    return (
        <Button bsPrefix="pink-button">{props.action}</Button>
    );
}
 
export default PinkButton;