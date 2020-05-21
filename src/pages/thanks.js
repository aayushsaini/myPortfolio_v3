import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import './contact.css';

const Thanks = () => (
    <Layout>
        <Nav/>
        <div className='contact__header'></div>
        <div className='contact__thanks'>
            <h1>Message Sent!✔<br/>I'll get back to you soon..</h1>
        </div>
        <center><h5 className="footer__text">Designed & Developed by <a className="footer__link" href="https://www.linkedin.com/in/aayush-saini/">Aayush Saini</a></h5></center>
    </Layout>
)

export default Thanks