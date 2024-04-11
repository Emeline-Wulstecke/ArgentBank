import './navbar.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './../../asset/argentBankLogo.webp';

const Navbar = () => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
  
    const handlelogOut = (e) => {
      e.preventDefault();
      dispatch(logOut());
      navigate('/');
    };

    return (
        <nav id='nav'>
            <NavLink to='/'>
                <img src={Logo} alt='Argent Bank Logo' />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
            <ul>
                <li>
                    {isAuthenticated ? (
                        <>
                            <NavLink to='/profile'>
                                <i className='fa fa-user-circle main-nav-item'></i>
                                {user?.userName}
                            </NavLink>
                            <NavLink to='/' onClick={handlelogOut}>
                                <i className='fa fa-sign-out'></i>
                                Sign Out
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to='/login'>
                            <i className='fa fa-user-circle'></i>
                            Sign In
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;