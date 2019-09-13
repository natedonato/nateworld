import React from "react";
import NavBar from "./navbar/navbar";
import Portrait from './portrait/portrait';
import { graphql } from 'gatsby';

export default ({data})=>{
    return (
        <div style={{ height: "100%", display: "flex", flexFlow: "column" }}>
            <NavBar style={{ background: "antiquewhite"}} />
            <div className="portraitBG">
                <Portrait data={data}/>
            </div>
        </div>
    )
}


export const query = graphql`
query {
    allFile(filter: { absolutePath: { regex: "/(/portrait/portraits)/.*$/" } }) {
        edges {
            node {
                id
                publicURL
            }
        }
    }
} `