import './features.css';
import React from 'react';

const Features = ({ icon, alt, title, description }) => {
    console.log(icon)

    return (
        <figure className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </figure>
    )
}

export default Features;
