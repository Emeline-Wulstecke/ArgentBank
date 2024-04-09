import React from 'react';
import './home.css';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import featuresData from '../../data/featuresData.json';


const Home = () => {
    return (
        <main>
            <Banner />
            <section className='icon'>
                <h2 className='sr-only'>Features</h2>
                {featuresData.map((feature, index) => (
                    <Features
                        key={index}
                        icon={feature.icon}
                        alt={feature.alt}
                        title={feature.title}
                        description={feature.description} />
                ))}
            </section>
        </main>
    )
}

export default Home;