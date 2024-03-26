import './navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../../assets/images/argentBankLogo.webp';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <NavLink to='/' className='main-nav-logo'>
                <img src={Logo} alt="Logo de Argent bank écrit en capitale et de couleur verte" className="main-nav-logo-image" />
            </NavLink>

            <ul>
                <NavLink to='login'>
                    <li>
                        <i className='fa fa-user-circle main-nav-item'></i>
                        Sign In
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
