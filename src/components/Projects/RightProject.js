import React, {useState} from 'react'

const RightProject = ({project, dark}) => {
    const [entered, setEntered] = useState(false)

    let id = dark ? 'dark-projs' : null;
    let linkId = dark ? 'dark-code' : null;

    let isViewing = (
            <div className="projectInfo fadeIn">
                <h2 className="projectName" id={entered ? "hidden" : null}>{project.name}</h2>
                <div className="desc-box">
                    {project.desc}
                </div>
                <div className="proj-links">
                    <h3 className="view">View Project</h3>
                    <a id={linkId} className="proj-link" rel="noopener noreferrer" target="_blank" href={project.live}>Live</a>
                    <a id={linkId} className="proj-link" rel="noopener noreferrer" target="_blank" href={project.code}>Code</a>
                </div>
            </div>
    )
    let isntViewing = (
            <div className="projectInfo">
                <h2 className="projectName">{project.name}</h2>
            </div>
    )


    let classes = ""
    if (project.first) {
        classes = "rightProject firstProject";
    } else {
        classes = "rightProject"
    }
    return (
        <div className={classes} onMouseLeave={() => setEntered(false)} onMouseEnter={() => setEntered(true)}>
            <div id={id} className="r-inner">
            {entered ? isViewing : isntViewing}
            <div className="foo border-2">
                <img className={entered ? "projectImage fadeIn" : "projectImage"} src={project.image} alt="project1"></img>
            </div>
            </div>
        </div>
    )
}

export default RightProject
