import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/actions/auth.actions';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const loginError = useSelector(state => state.auth.error);

  const handlelogIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      await dispatch(logIn({ email, password, rememberMe }));

      navigate('/profile');
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-dark">
      <section id='login'>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h2>Sign In</h2>
        {loginError && <p>{loginError}</p>}
        <form onSubmit={handlelogIn}>
          <fieldset>
            <label htmlFor="username" className='sign'>Username</label>
            <input type="text" id="username" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </fieldset>
          <fieldset>
            <label htmlFor="password" className='sign'>Password</label>
            <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </fieldset>
          <fieldset className="remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <label htmlFor="remember-me">Remember me</label>
          </fieldset>
          <button type="submit" disabled={isLoading}>{isLoading ? 'logIng In...' : 'Sign In'}</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
