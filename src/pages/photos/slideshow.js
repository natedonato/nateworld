import React, { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import './slideshow.css';

export default function SlideShow() {
    const [index, setIndex] = useState(0);
    const { allFile } = useStaticQuery(
        graphql`
      query {
  allFile(filter: {absolutePath: {regex: "/(/photos/gifs)/.*.gif$/"}}) {
    edges {
      node {
        id
        publicURL
      }
    }
  }
}
    `
    );
    //Minus 1 for array offset from 0
    const length = allFile.edges.length - 1
    const handleNext = () =>
        index === length ? setIndex(0) : setIndex(index + 1);
    const handlePrevious = () =>
        index === 0 ? setIndex(length) : setIndex(index - 1);
    const { node } = allFile.edges[index];
    return (
        <div className="bg">
            <div className="slideshowContainer">
                <img alt="gif" src={node.publicURL} className="activePhoto"></img>
                <div>
                    <button onClick={() => handlePrevious()}>Previous</button>
                    <button onClick={() => handleNext()}>Next</button>
                </div>
                <div className="imgGallery">
                {allFile.edges.map((edge, idx) => 
                    <img alt="small gif" src={edge.node.publicURL} key={idx} onClick={() => {
                    setIndex(idx); window.scrollTo({
                        top: 0,
                        behavior: 'auto'
                    });
                    }} className="thumbnail"></img>
                )}
                </div>
            </div>
        </div>
    )
}