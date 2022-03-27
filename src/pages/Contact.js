import React from 'react';
import '../styles/Contact.css';
import ContactImage from '../assets/photo.jpeg';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${ContactImage})` }}></div>
            <div className='rightSide'>
                <h1>Contact Us</h1>
                <form method='POST' id='contact-form'>
                    <label htmlFor='name'>Full Name</label>
                    <input name='name' type='text' placeholder='Enter your Name' />
                    <label htmlFor='Email'>Email</label>
                    <input name='email' type='email' placeholder='Enter Email Address' />
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' rows='7' placeholder='Enter your Message'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
