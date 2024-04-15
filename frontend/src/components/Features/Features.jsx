import './features.css';
import React from 'react';

const Features = ({ icon, alt, title, description }) => {
    console.log(icon)

    return (
        <figure id='features' loading="lazy">
            <img src={icon} alt={alt} />
            <figcaption>
                <h3>{title}</h3>
                <p>{description}</p>
            </figcaption>
        </figure>
    )
}

export default Features;
