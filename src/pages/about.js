import React from 'react';
import { graphql, navigate, StaticQuery } from 'gatsby';
import './about.css';
import Layout from '../components/layout';
import Nav from  '../components/nav2';
import SEO from '../components/seo';

export default () => (
    <StaticQuery
        query={graphql`
            query AboutQuery{
                allContentfulBlog(
                    limit:7
                    sort: { fields: [createdAt] }
                    filter: {
                        node_locale: {eq: "en-US",}
                        category: {elemMatch: {title: {eq:"About me"}}}   
                    }
                ) 
                {
                    edges{
                        node{
                            id
                            slug
                            title
                            featuredImage {
                                fluid(maxWidth: 1980, quality: 85) {
                                    src
                                    ...GatsbyContentfulFluid
                                }
                            }
                        }
                    }
                }
            }
    `}
        render={data => (   
            <Layout>
            <SEO title='Contact' description='Contact Aayush Saini'/>
            <Nav />
            <div className='about__header'></div>
            <div className='about__section'>
                <div className='abouZZZ__form'>
                    <h1>About me<span style={{color:'#dead26', fontWeight:'600'}}> .</span></h1>
                </div>
            </div>
            <div className='feedx'>
                {data.allContentfulBlog.edges.map(edge => (
                    <div key={edge.node.id} data-aos="fade-up" className='cardx'
                        style={{
                            backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(10,10,10,0.1) 0%,
                            rgba(10,10,10,0.1) 10%,
                            rgba(10,10,10,0.7) 100%),
                            url(${edge.node.featuredImage.fluid.src})`
                        }}
                        onClick={() => navigate(`/blog/${edge.node.slug}`)}>
                        <p className='card__title'>{edge.node.title}</p>
                        

                    </div>
                ))}
            </div>
            <center><h5 className="footer__text">Designed & Developed by <a className="footer__link" href="https://www.linkedin.com/in/aayush-saini/">Aayush Saini</a></h5></center> 
        </Layout> 
        )}
        
    />
)

