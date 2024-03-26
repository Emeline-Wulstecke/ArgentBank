import './navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import argenBankLogo from '../../assets/argentBankLogo.webp';

const Navbar = () => {
    return (
        <nav className='nav'>
            <NavLink to='/' className='nav-logo'>
                <img src={argenBankLogo} alt="Logo de Argent bank écrit en capitale et de couleur verte" className="logo" />
            </NavLink>

            <ul>
                <NavLink to='login' className='nav-item'>
                    <li>
                        <i className='fa fa-user-circle'></i>
                        Sign In
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
