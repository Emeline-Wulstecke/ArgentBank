import './account.css';
import React from 'react';


  const Account = ({ type, number, balance, balanceDescription}) => {
    return (
        <section id="account">
        <header>
            <h3>{type} - {number}</h3>
            <p className='amount'>{balance}</p>
            <p>{balanceDescription}</p>
        </header>
            <button>View transactions</button>
    </section>
    );
};

export default Account;
