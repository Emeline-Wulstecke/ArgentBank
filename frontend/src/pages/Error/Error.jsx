import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.css';
import exit from './../../asset/exit.webp';

const Error = () => {
    return (
        <main id='error'>
            <section>
                <h2>404</h2>
                <p>Page not found</p>
                <NavLink to="/">
                    <figure>
                        <img src={exit} alt="exit" />
                        <figcaption >Back to home Page</figcaption>
                    </figure>
                </NavLink>
            </section>
        </main>
    );
}

export default Error;
