const path = require('path');

const makeRequest = (graphql, request) => new Promise((resolve, reject) =>{
    //Query for nodes to use in creating pages
    resolve(
        graphql(request).then(result =>{
            if(result.errors){
                reject(result.errors)
            }
            return result;
        })
    )
});

//implement Gatsby APO "CreatePages". This is called once the data
//layer is bootstrapped to let plugins create pages from data.

exports.createPages = ({ actions, graphql}) => {
    const { createPage } = actions;

    //create pages for each blog/
    const getBlog = makeRequest(graphql,`
    {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
            {
                edges{
                    node{
                        id
                        slug
                    }
                }
            }
    }
    `).then(result => {
        result.data.allContentfulBlog.edges.forEach(({ node }) => {
            createPage({
                path: `blog/${node.slug}`,
                component: path.resolve(`./src/templates/blog.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    //create Arhcive page fpr all blog with pagination/
    const getArchive = makeRequest(graphql,`
    {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}},)
            {
                edges{
                    node{
                        id
                        slug
                    }
                }
            }
    }
    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 7
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({ length: numPages }).forEach((_, i) =>{
            createPage({
                path: i === 0? `/blog` : `/blog/${i+1}`,
                component: path.resolve("./src/templates/archive.js"),
                context:{
                    limit: blogsPerPage,
                    skip: i*blogsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            })
        })

    });

    //create Cat-1 page fpr all blog with pagination/
    const getCat1 = makeRequest(graphql,`
    {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}
                category: {elemMatch: {title: {eq:"Web Development"}}}
            },)
            {
                edges{
                    node{
                        id
                        slug
                    }
                }
            }
    }
    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 7
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({ length: numPages }).forEach((_, i) =>{
            createPage({
                path: i === 0? `/category/web-development` : `/category/web-development/${i+1}`,
                component: path.resolve("./src/templates/cat1.js"),
                context:{
                    limit: blogsPerPage,
                    skip: i*blogsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            })
        })

    });

    //create Cat-2 page fpr all blog with pagination/
    const getCat2 = makeRequest(graphql,`
    {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}
                category: {elemMatch: {title: {eq:"Artificial Intelligence"}}}
            },)
            {
                edges{
                    node{
                        id
                        slug
                    }
                }
            }
    }
    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 7
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({ length: numPages }).forEach((_, i) =>{
            createPage({
                path: i === 0? `/category/artificial-intelligence` : `/category/artificial-intelligence/${i+1}`,
                component: path.resolve("./src/templates/cat2.js"),
                context:{
                    limit: blogsPerPage,
                    skip: i*blogsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            })
        })

    });

    //create Cat-3 page fpr all blog with pagination/
    const getCat3 = makeRequest(graphql,`
    {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}
                category: {elemMatch: {title: {eq:"UI/UX Design"}}}
            },)
            {
                edges{
                    node{
                        id
                        slug
                    }
                }
            }
    }
    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 7
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({ length: numPages }).forEach((_, i) =>{
            createPage({
                path: i === 0? `/category/ui-ux-design` : `/category/ui-ux-design/${i+1}`,
                component: path.resolve("./src/templates/cat3.js"),
                context:{
                    limit: blogsPerPage,
                    skip: i*blogsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            })
        })

    });

    //create Cat-4 page fpr all blog with pagination/
    const getCat4 = makeRequest(graphql,`
    {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "en-US"}
                category: {elemMatch: {title: {eq:"Others"}}}
            },)
            {
                edges{
                    node{
                        id
                        slug
                    }
                }
            }
    }
    `).then(result => {
        const blogs = result.data.allContentfulBlog.edges
        const blogsPerPage = 7
        const numPages = Math.ceil(blogs.length / blogsPerPage)
        
        Array.from({ length: numPages }).forEach((_, i) =>{
            createPage({
                path: i === 0? `/category/others` : `/category/others/${i+1}`,
                component: path.resolve("./src/templates/cat4.js"),
                context:{
                    limit: blogsPerPage,
                    skip: i*blogsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            })
        })

    });

        //create Cat-5 page fpr all blog with pagination/
        const getCat5 = makeRequest(graphql,`
        {
            allContentfulBlog(
                sort: { fields: [createdAt], order: DESC }
                filter: {
                    node_locale: {eq: "en-US"}
                    category: {elemMatch: {title: {eq:"Life"}}}
                },)
                {
                    edges{
                        node{
                            id
                            slug
                        }
                    }
                }
        }
        `).then(result => {
            const blogs = result.data.allContentfulBlog.edges
            const blogsPerPage = 7
            const numPages = Math.ceil(blogs.length / blogsPerPage)
            
            Array.from({ length: numPages }).forEach((_, i) =>{
                createPage({
                    path: i === 0? `/category/life` : `/category/life/${i+1}`,
                    component: path.resolve("./src/templates/cat5.js"),
                    context:{
                        limit: blogsPerPage,
                        skip: i*blogsPerPage,
                        numPages,
                        currentPage: i + 1
                    },
                })
            })
    
        });

        //create Cat-6 page fpr all blog with pagination/
        const getCat6 = makeRequest(graphql,`
        {
            allContentfulBlog(
                sort: { fields: [createdAt], order: DESC }
                filter: {
                    node_locale: {eq: "en-US"}
                    category: {elemMatch: {title: {eq:"About me"}}}
                },)
                {
                    edges{
                        node{
                            id
                            slug
                        }
                    }
                }
        }
        `).then(result => {
            const blogs = result.data.allContentfulBlog.edges
            const blogsPerPage = 7
            const numPages = Math.ceil(blogs.length / blogsPerPage)
            
            Array.from({ length: numPages }).forEach((_, i) =>{
                createPage({
                    path: i === 0? `/category/about-me` : `/category/about-me/${i+1}`,
                    component: path.resolve("./src/templates/cat6.js"),
                    context:{
                        limit: blogsPerPage,
                        skip: i*blogsPerPage,
                        numPages,
                        currentPage: i + 1
                    },
                })
            })
    
        });

    return Promise.all([
        getBlog,
        getArchive,
        getCat1,
        getCat2,
        getCat3,
        getCat4,
        getCat5,
        getCat6
    ])
};