import './account.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Account = ({ type, number, balance, balanceDescription }) => {
    const navigate = useNavigate();

    const redirectToErrorPage = () => {
        navigate('/error');
    };


    return (
        <section id="account">
            <header>
                <h3>{type} - {number}</h3>
                <b>{balance}</b>
                <p>{balanceDescription}</p>
            </header>
            <button onClick={redirectToErrorPage}>View transactions</button>
        </section>
    );
};

export default Account;
