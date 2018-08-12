import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (

  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h2>Index</h2>
    <ul style={{listStyle: 'none'}}>
      {data.allMarkdownRemark.edges.map((post, index) => (
        <li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 100
      filter: { frontmatter: {published : {eq: true}}}
      sort: { fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`;

export default IndexPage
