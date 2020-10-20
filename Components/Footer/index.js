import React from 'react';
import './styles.css';
import Yellowbar from '../Yellowbar';
import Mail from '../../assets/mail.svg';



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <h2>Website By Jeremy Rivera</h2>
                    <p>
                        Some copyright text ipsum available, but the majority have suffered
                        alteration in some form.
                    </p>
                </div>
                <div className="footer__right">
                    <a href="/about">About</a> <a href="">Services</a>
                    <a href="">Portfolio</a> <a href="">Contacts</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;