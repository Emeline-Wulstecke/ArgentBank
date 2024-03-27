import './features.css';
import React from 'react';
import featuresData from '../../data/featuresData.json';


const Features = () => {
    return (
        <section className='features'>
            <h2 className='sr-only'>Features</h2>
            {featuresData.map((feature, index) => (
                <figure className="feature-item" key={index}>
                    <img src={feature.icon} alt="Feature Icon" className="feature-icon" />
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.description}</p>
                </figure>
            ))}
        </section>
    )

}

export default Features;