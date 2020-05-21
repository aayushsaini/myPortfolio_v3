import React from 'react';
import './footer.css';
import footer from '../../images/footer.jpg';

const Footer = () => {
    return (
        <div className='footer_' style={{
            backgroundImage: `linear-gradient(
                to bottom,
                rgba(10,10,10,1) 15%,
                rgba(10,10,10,0.5) 50%,
                rgba(10,10,10,0.7) 100%),
                url(${footer})`
                }}>
        </div>
    )
}

export default Footer;