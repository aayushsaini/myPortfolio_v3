import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import './featured.css'

export default () => (
    <StaticQuery
        query={graphql`
            query FeaturedQuery{
                allContentfulBlog(
                    limit:1
                    sort: { fields: [createdAt], order: DESC}
                    filter: {
                        node_locale: {eq: "en-US",}
                        featured: {eq: true}
                    }
                ) 
                {
                    edges{
                        node{
                            id
                            slug
                            title
                            shortDescription
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
            <header>
                {data.allContentfulBlog.edges.map(edge => (
                    <div key={edge.node.id} className='header__section'>
                        <div className='header__hero' style={{ backgroundImage: `url(${edge.node.featuredImage.fluid.src})`}}></div>
                        <div className='header__content'>
                        <center><div className='header__info'>
                                <h1 className='header__title'>Yes! I Love <span className='hl'>Mountains.</span></h1><br/>
                                <p className='header__subtitle'>Developer | Designer | Dreamer</p>
                            </div></center>
                        </div>
                    </div>
                ))}
            </header>
        )}
/>
)
