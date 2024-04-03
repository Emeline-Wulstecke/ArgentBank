import './account.css';
import React from 'react';


  const Account = ({ type, number, balance, balanceDescription}) => {
    return (
        <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{type} - {number}</h3>
            <p className="account-amount">{balance}</p>
            <p className="account-amount-description">{balanceDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>
    );
};

export default Account;
