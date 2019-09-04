import React from "react";
import { graphql } from "gatsby";
import Slideshow from './photos/slideshow';

export default ({ data }) => (
    <div>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
            I made this site using Gatsby and React from the ground up using very few plugins or external libraries.  This is the page I use to test GraphQL queries.
            Welcome.
    </p>
    <Slideshow />
    </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}
`