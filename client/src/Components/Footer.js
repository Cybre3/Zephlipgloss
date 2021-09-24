import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <nav>
            <div>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                <Link to="/">Zephlipgloss.com</Link>
            </div>
            <p>Philadelphia, Pennsylvania, United States</p>
            <p>Copyright © 2021 Zephlipgloss.com - All Rights Reserved.</p>
        </nav>
    );
}
 
export default Footer;