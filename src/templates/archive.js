import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import { window } from 'browser-monads';
import Layout from '../components/layout';
import Nav from '../components/nav';
import SEO from '../components/seo';
import '../components/home/home.css';
import './archive.css';
import headerImg from '../images/headerImg.jpg';

const Archive = (props) => {

    const blogContent = props.data.allContentfulBlog
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
    const nextPage = `/blog/${currentPage + 1}`

    return (
        <Layout>
            <SEO title='Blog' keywords={['aayush', 'aayush saini', 'saini', 'ayush', 'ayush saini', 'programming', 'computer science', 'web', 'design', 'development', 'html', 'css', 'html5', 'css3', 'js', 'javascript', 'web design', 'web developer', 'ai', 'ml', 'dl', 'artificial intelligence', 'life', 'travelblog', 'lifestyle', 'programmer']} />
            <Nav />
            <header>
                <div className='archive__section'>
                    <div className='archive__hero' style={{ backgroundImage: `url(${headerImg})` }}></div>
                    <div className='archive__nav'>
                        <Link to='/blog' className={window.location.href.indexOf('/blog') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>All</Link>
                        <Link to='/category/web-development' className={window.location.href.indexOf('category/web-development') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Web</Link>
                        <Link to='/category/artificial-intelligence' className={window.location.href.indexOf('category/artificial-intelligence') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>A.I.</Link>
                        <Link to='/category/ui-ux-design' className={window.location.href.indexOf('category/ui-ux-design') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>UI/UX</Link>
                        <Link to='/category/others' className={window.location.href.indexOf('category/others') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Others</Link>
                        <Link to='/category/life' className={window.location.href.indexOf('category/life') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Life</Link>
                    </div>
                </div>
            </header>

            <div className='feed'>
                {blogContent.edges.map(edge => (
                    <div key={edge.node.id} className='card'
                        style={{
                            backgroundImage: `linear-gradient(
                                            to bottom,
                                            rgba(10,10,10,0) 0%,
                                            rgba(10,10,10,0) 50%,
                                            rgba(10,10,10,0.7) 100%),
                                            url(${edge.node.featuredImage.fluid.src})`
                        }}
                        onClick={() => navigate(`/blog/${edge.node.slug}`)}>
                        {edge.node.category.map(category => (
                            <p className='card__category'>{category.title}</p>
                        ))}
                        <p className='card__title'>{edge.node.title}</p>
                    </div>
                ))}
            </div>

            <div className='pagination'>
                <div className='pagination__item'>
                    {!isFirst && (
                        <Link to={prevPage} rel='prev'>
                            <div className='arrow__back'></div>
                        </Link>
                    )}
                </div>
                <div className='pagination__item'>
                    {!isLast && (
                        <Link to={nextPage} rel='next'>
                            <div className='arrow__next'></div>
                        </Link>
                    )}
                </div>
            </div>
            <center><h5 className="footer__text">Designed & Developed by <a className="footer__link" href="https://www.linkedin.com/in/aayush-saini/">Aayush Saini</a></h5></center>             
        </Layout>
    )
}

export default Archive

//create Arhcive page fpr all blog with pagination/
export const pageQuery = graphql`
query ArchiveQuery ($skip: Int!, $limit: Int!){
    allContentfulBlog(
        sort: { fields: [createdAt], order: DESC }
        filter: {
            node_locale: {eq: "en-US",}}
            skip: $skip
            limit: $limit
            )
        {
            edges{
                node{
                    id
                    slug
                    title
                    createdAt
                    category{
                        title
                        id
                    }
                    featuredImage{
                        fluid(maxWidth: 1200, quality: 85){
                            src
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
}
`
