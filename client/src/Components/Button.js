import { Button } from 'react-bootstrap';

const PinkButton = (props) => {
    return (
        <Button style={{backgroundColor: "rgb(250, 184, 196)"}}>{props.action}</Button>
    );
}
 
export default PinkButton;