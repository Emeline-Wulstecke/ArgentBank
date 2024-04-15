import React, { useEffect, useState } from 'react';
import './profile.css';
import Account from '../../components/Account/Account';
import accountData from '../../data/accountData.json';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, editUsername } from '../../redux/actions/auth.actions';

const Profile = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    //////////! Edit username
    const [updateUsername, setupdateUsername] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [initialUserName, setInitialUserName] = useState('');

    useEffect(() => {
        if (userProfile) {
            setNewUserName(userProfile.userName || '');
            setInitialUserName(userProfile.userName || '');
        } else {
            setNewUserName('');
            setInitialUserName('');
        }
    }, [userProfile]);
    
    const toggleEdit = () => {
        setupdateUsername(!updateUsername);
        if (!updateUsername) {
            setNewUserName(userProfile.userName || '');
        }
    };

    const handleSave = () => {
        dispatch(editUsername(newUserName));
        alert('Your username has been changed');
        setInitialUserName(newUserName); 
        toggleEdit();
    };

    const handleCancel = () => {
        setNewUserName(initialUserName);
        toggleEdit();
    };

    return (
        <main className='main bg-dark'>

            {!updateUsername ? (
                <section className='header'>
                    <h2>Welcome back<br />{userProfile && userProfile.firstName} {userProfile && userProfile.lastName} !</h2>

                    <button onClick={toggleEdit}>Edit Name</button>
                </section>

            ) : (
                <section className='edit'>
                    <h2>Edit user info</h2>
                    <fieldset>
                        <label htmlFor="newUserName" >User Name: </label>
                        <input
                            type="text"
                            id="newUserName"
                            placeholder="Enter New Username"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="firstName" >First Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            value={userProfile.firstName}
                            disabled
                            className='text_input'
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName" >Last Name: </label>
                        <input
                            type="text"
                            id="lastName"
                            value={userProfile.lastName}
                            disabled
                            className='text_input'
                        />
                    </fieldset>
                    <form >
                        <button type="submit" onClick={handleSave} className='save-button'>Save</button>
                        <button type="button" onClick={handleCancel} className='cancel-button'>Cancel</button>
                    </form>
                </section>
            )}

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