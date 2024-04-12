import './account.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Account = ({ type, number, balance, balanceDescription }) => {
    const navigate = useNavigate();

    const redirectToErrorPage = () => {
        navigate('/error'); // Redirection vers la page d'erreur
    };


    return (
        <section id="account">
            <header>
                <h3>{type} - {number}</h3>
                <p className='amount'>{balance}</p>
                <p>{balanceDescription}</p>
            </header>
            <button onClick={redirectToErrorPage}>View transactions</button>
        </section>
    );
};

export default Account;
