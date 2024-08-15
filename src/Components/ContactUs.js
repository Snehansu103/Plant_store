import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css'

function ContactUs() {
    return (
        <>
            <div className='nav-bar' style={{margin: '40px'}}>
                <div style={{ width: '90%'}}>
                    <Link to={'/home'}><p>B.planet</p></Link>
                </div>
                <div className='contact-btn'>
                    <Link to={'/contactus'}>Contact Us</Link>
                </div>
            </div>
            <h1 style={{textAlign:'center'}}>Contact Us</h1>
            <div className='contact-us-box'>
                <div className='contact-info'>
                    <h1>Stay Updated</h1>
                    <p>Need to get in touch with us ?</p>
                    <br />
                    <Link to={'/home'}>Facebook</Link> <br />
                    <Link to={'/home'}>Instagram</Link>
                </div>
                <div className='contact-form'>
                    <input placeholder='Name'></input>
                    <input placeholder='Email Address'></input>
                    <input placeholder='What can we help you with ?'></input>
                    <button type='button'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default ContactUs
