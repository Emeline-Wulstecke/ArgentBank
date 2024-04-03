import React from 'react';
import './profile.css';
import Account from '../../components/Account/Account';
import accountData from '../../data/accountData.json';

const Profile = () => {
    return (
        <main className='main bg-dark'>
            <section className='header'>
            <h1 className='title-header'>Welcome back<br />Tony Jarvis!</h1>
            <button className='edit-button'>Edit Name</button>
            </section>
            <h2 className='sr-only'>Accounts</h2>
            {accountData.map((account, index) => (
                <Account
                    key={index}
                    type={account.type}
                    number={account.number}
                    balance={account.balance}
                    balanceDescription={account.balanceDescription}
                />
            ))}
        </main>
    );
}

export default Profile;

