import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => (
    <div>
        <h1>About {data.site.siteMetadata.title}</h1>
        {console.log(data)}
        <p>
            We're the only site running on your computer dedicated to showing the best
            photos and videos of pandas eating lots of food.
    </p>
    </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/txt/txtposts)/.*.md$/" } }, sort: { fields: id, order: DESC }) {
        edges {
            node {
                id
                rawMarkdownBody
                frontmatter {
                    title
                }
            }
        }
    }
}
`