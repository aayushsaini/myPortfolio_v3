import React from "react"
import { Link } from 'gatsby'
import Nav from '../components/nav'
import Featured from '../components/featured'
import Home from '../components/home'
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo" 
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav/>
    <Featured/>
    <h1 className="mywork">My Feed<span style={{color:'#F18A77', fontWeight:'600'}}> .</span></h1>
    <Home/>
    <Link to='/blog' className='viewmore'>View More</Link>
    <Footer/>
    <center><h5 className="footer__text">Designed & Developed by <a className="footer__link" href="https://www.linkedin.com/in/aayush-saini/">Aayush Saini</a></h5></center>
  </Layout>
)

export default IndexPage
