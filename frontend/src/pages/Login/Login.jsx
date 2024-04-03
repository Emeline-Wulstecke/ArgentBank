import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/user.action';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const loginError = useSelector(state => state.users.loginError);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await dispatch(loginUser(email, password, rememberMe));
      
      // Vérifiez si la réponse contient un token valide
      if (!response || !response.data || !response.data.body || !response.data.body.token) {
        throw new Error('Invalid token');
      }

      // La connexion a réussi si nous arrivons ici
      // Redirigez vers la page /profile
      navigate('/profile');
    } catch (error) {
      setIsLoading(false);

    }
  };

  return (
    <main className="bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {loginError && <p className="error-message">{loginError}</p>}
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"  autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button" disabled={isLoading}>{isLoading ? 'Signing In...' : 'Sign In'}</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
