import './navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../../assets/images/argentBankLogo.webp';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <NavLink to='/' className='main-nav-logo'>
                <img src={Logo} alt="Logo de Argent bank écrit en capitale et de couleur verte" className="main-nav-logo-image" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <ul>
                <li>
                    <NavLink to='login' className={({ isActive }) => isActive ? 'main-nav-item main-nav-item-active' : 'main-nav-item'}>
                        <i className='fa fa-user-circle main-nav-item'></i>
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
