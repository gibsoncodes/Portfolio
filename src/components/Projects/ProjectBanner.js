import React from 'react'

const ProjectBanner = ({setDark, dark}) => {

    let id = dark ? "banner-light" : null;
    let linksId = dark ? "dark-links" : null;
    return (
        <div className="banner" id={id}>
            <div className="banner-left">
                <h1 className="banner-title">PROJECTS</h1>
                <img id={dark ? 'light-tree' : null} onClick={() => setDark(!dark)} className="tree treeSway" src={dark ? "images/light-tree.png" : "images/tree2.png"} alt="tree"></img>
            </div>
        <div id={linksId} className="contactLinks">
            <a href="https://github.com/gibsoncodes"rel="noopener noreferrer" target="_blank" ><img className="link github" src="images/github.png" alt="linkedin"></img></a>
            <a href="https://www.linkedin.com/in/gibsoncodes/" rel="noopener noreferrer" target="_blank"><img className="link linkedin" src="images/linked.png" alt="linkedin"></img></a>
            <a href="https://www.linkedin.com/in/gibsoncodes/" rel="noopener noreferrer" target="_blank"><img  className="link resume" src="images/resume.png" alt="linkedin"></img></a>
        </div>
        </div>
    )
}

export default ProjectBanner
