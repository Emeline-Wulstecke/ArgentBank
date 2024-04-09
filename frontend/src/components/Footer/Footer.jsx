import './footer.css';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='footer'>
            <p>Copyright {currentYear} Argent Bank</p>
        </footer>
    )
}

export default Footer;