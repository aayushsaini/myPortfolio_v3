import React from 'react';
import Layout from '../components/layout';
import Nav from  '../components/nav';
import SEO from '../components/seo';

import './contact.css';

const Contact = () => (
    <Layout>
        <SEO title='Contact' description='Contact Aayush Saini'/>
        <Nav />
        <div className='contact__header'></div>
        <div className='contact__section'>
            <div className='contact__form'>
                <h1>Contact</h1>
                <div className='inner'>
                    <form method='post' name='contact' action='/thanks' data-netlify='true' netlify-honeypot='bot'>
                        <input type='hidden' name='form-name' value='contact'/>
                        <div className='field__hidden'>
                            <label>Don't fill this out, human</label>
                            <input name='bot'></input>
                        </div>
                        <div className='field'>
                            <label>Name</label>
                            <input type='text' name='name'/>
                        </div>
                        <div className='field'>
                            <label>Email</label>
                            <input type='text' name='email'/>
                        </div>
                        <div className='field'>
                            <label>Message/Query</label>
                            <textarea name='message' rows='6'></textarea>
                        </div>
                        <div className='submit'>
                            <button type='submit' className='btn__med'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <center><h5 className="footer__text">Designed & Developed by <a className="footer__link" href="https://www.linkedin.com/in/aayush-saini/">Aayush Saini</a></h5></center>
    </Layout>
)

export default Contact