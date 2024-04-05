import React, { useEffect, useState } from 'react';
import './profile.css';
import Account from '../../components/Account/Account';
import accountData from '../../data/accountData.json';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, editUser } from '../../actions/user.action';

const Profile = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(state => state.users.userProfile);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    //////////! Edit username
    const [editUserName, setEditUserName] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [initialUserName, setInitialUserName] = useState('');

    useEffect(() => {
        setInitialUserName(userProfile.userName || ''); // Stock le nom d'utilisateur initial
    }, [userProfile]);

    const toggleEdit = () => {
        setEditUserName(!editUserName);
        if (!editUserName) {
            setNewUserName(initialUserName); // Réinitialise le champ de saisie avec le nom d'utilisateur initial
        }
    };

    const handleSave = () => {
        dispatch(editUser(newUserName));
        alert('Your username has been changed');
        setInitialUserName(newUserName); // Met à jour le nom d'utilisateur initial avec le nouveau nom d'utilisateur
        toggleEdit();
    };

    const handleCancel = () => {
        toggleEdit();
    };

    return (
        <main className='main bg-dark'>
            <section className='header'>
                {editUserName ? (
                    <section className='edit'>
                        <h2 className='title-edit'>Edit user info</h2>
                        <div>
                            <label htmlFor="newUserName" className='label-edit'>User Name: </label>
                            <input
                                type="text"
                                id="newUserName"
                                placeholder="Enter New Username"
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="firstName" className='label-edit'>First Name: </label>
                            <input
                                type="text"
                                id="firstName"
                                value={userProfile.firstName}
                                disabled
                                className='text_input'
                            />
                        </div>
                        <div >
                            <label htmlFor="lastName" className='label-edit'>Last Name: </label>
                            <input
                                type="text"
                                id="lastName"
                                value={userProfile.lastName}
                                disabled
                                className='text_input'
                            />
                        </div>
                        <div className='edit-buttons'>
                            <button onClick={handleSave} className='save-button'>Save</button>
                            <button onClick={handleCancel} className='cancel-button'>Cancel</button>
                        </div>
                    </section>
                ) : (
                    <section>
                        <h1 className='title-header'>Welcome back<br />{userProfile.firstName} {userProfile.lastName} !</h1>
                        <button className='edit-button' onClick={toggleEdit}>Edit Name</button>
                    </section>
                )}
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
};

export default Profile;
