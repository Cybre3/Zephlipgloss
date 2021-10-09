import { Button } from 'react-bootstrap';

const PinkButton = (props) => {
    return (
    <Button bsPrefix="pink-button" disabled={props.disabled} type={props.type}>{props.action}</Button>
    );
}
 
export default PinkButton;