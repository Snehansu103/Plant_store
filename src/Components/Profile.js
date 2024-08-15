import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../ReduxStore/actions';
import { Navigate } from 'react-router-dom';
import './Profile.css'

function Profile() {
    const user = useSelector(state => state.loggedUser);
    const dispatch = useDispatch();

    function onLogout() {
        console.log("logged Out");
        try {
            dispatch(logout());
        } catch (error) {
            console.log(error);
        }
        console.log(user);
        
        // Navigate('/');        
    }
    return (
        <>
            <div className='nav-bar' style={{ margin: '40px 40px 40px 150px', marginLeft: '40px' }}>
                <div style={{ width: '90%', textAlign: 'center' }}>
                    <Link to={'/home'}><p>B.planet</p></Link>
                </div>
                <div className='contact-btn'>
                    <Link to={'/contactus'}>Contact Us</Link>
                </div>
            </div>
            <div className='profile-box'>
                <div className='profile-header'>
                    <div className='image-holder'>
                        <img src={user.url} />
                    </div>
                </div>
                <div className='profile-data'>
                    <label>Name</label>
                    <input defaultValue={user.name}></input>
                    <label>Email</label>
                    <input defaultValue={user.email}></input>
                    <label>Password</label>
                    <input defaultValue={user.password}></input>
                    <label>Phone Number</label>
                    <input defaultValue={user.phoneNo}></input>
                    <label>Address</label>
                    <input defaultValue={user.address}></input>
                    <label>State</label>
                    <input defaultValue={user.state}></input>
                    <label>Zip Code</label>
                    <input defaultValue={user.zipCode}></input>
                </div>
            </div>
            <button id='logout-btn' type='button' onClick={onLogout}>Log Out</button>
        </>
    )
}

export default Profile
