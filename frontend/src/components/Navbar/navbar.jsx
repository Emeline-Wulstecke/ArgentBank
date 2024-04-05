import './navbar.css';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logoutUser, fetchUser } from '../../actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './../../asset/argentBankLogo.webp';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userProfile = useSelector(state => state.users.userProfile);

    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate('/');
    };

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    const tokenLocalStorage = localStorage.getItem('token');
    const tokenSessionStorage = sessionStorage.getItem('token');
    const token = tokenLocalStorage || tokenSessionStorage;
    const storedUsername = localStorage.getItem('username'); // Récupe le nom d'utilisateur stocké
    const usernameToDisplay = storedUsername || (userProfile && userProfile.userName); // Utilise le nom d'utilisateur stocké s'il existe, sinon utiliser celui du profil

    if (token) {
        return (
            <nav className='main-nav'>
                <NavLink to='/' className='main-nav-logo'>
                    <img src={Logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
                    <h1 className='sr-only'>Argent Bank</h1>
                </NavLink>
                <ul className='main-nav-item'>
                    <li>
                        {usernameToDisplay && ( // Affiche le nom d'utilisateur si disponible
                            <NavLink to='/profile' className='main-nav-item'>
                                <i className='fa fa-user-circle main-nav-item'></i>
                                {usernameToDisplay}
                            </NavLink>
                        )}
                        <NavLink to='/' className='main-nav-item' onClick={handleSignOut}>
                            <i className='fa fa-sign-out main-nav-item'></i>
                            Sign Out
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className='main-nav'>
                <NavLink to='/' className='main-nav-logo'>
                    <img src={Logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
                    <h1 className='sr-only'>Argent Bank</h1>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to='/login' className='main-nav-item'>
                            <i className='fa fa-user-circle main-nav-item'></i>
                            Sign In
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
