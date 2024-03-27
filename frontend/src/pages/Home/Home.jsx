import React from 'react';
import './home.css';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';

const Home = () => {
    return (
        <main className="main">
            <Banner />
            <Features />
        </main>
    )
}

export default Home;