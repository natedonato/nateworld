import React from "react";
import {graphql} from 'gatsby';
import NavBar from "./navbar/navbar";
import TxtIndex from './txt/txtIndex';

function txtPage({ data }) {
    return (
        <div style={{ background: "teal", height: "100%"}}>
            <NavBar />
            <TxtIndex data={data}/>
        </div>
    )
}

export default txtPage;

export const query = graphql`
  query {
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
