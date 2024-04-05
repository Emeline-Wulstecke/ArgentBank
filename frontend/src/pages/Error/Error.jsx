import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.css';
import exit from './../../asset/exit.webp';

const Error = () => {
    return (
        <main className='main-error'>
            <section className="error">
                <h1 className='title-error'>404</h1>
                <p className="text-error">Page not found</p>
                <NavLink to="/" className="link-error">
                    <img src={exit} alt="exit" />
                    <p>Back to home Page</p>
                </NavLink>
            </section>
        </main>
    );
}

export default Error;
