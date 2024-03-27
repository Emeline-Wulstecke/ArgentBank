import './footer.css';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">Copyright {currentYear} Argent Bank</p>
        </footer>
    )
}

export default Footer;