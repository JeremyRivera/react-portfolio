import React from 'react'
import './styles.css'
import Yellowbar from '../Yellowbar';
import Mail from '../../assets/mail.svg';

const Contact = props => {
    return (
        <div className="contact">
            <h1 className="text">Contact Me</h1>
            <Yellowbar subText="Email" span="Jeremyrivera23@yahoo.com" src={Mail} />
        </div>

    );
}

export default Contact;