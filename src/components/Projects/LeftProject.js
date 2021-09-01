import React, {useState} from 'react'

const LeftProject = ({project}) => {
    const [entered, setEntered] = useState(false)

    let isViewing = (
            <div className="projectInfo">
                <h2 className="projectName" id={entered ? "hidden" : null}>{project.name}</h2>
                <div className="desc-box">
                    {project.desc}
                </div>
                <div className="proj-links">
                    <h3 className="view">View Project</h3>
                    <a className="proj-link" rel="noopener noreferrer" target="_blank" href={project.live}>Live</a>
                    <a className="proj-link" rel="noopener noreferrer" target="_blank" href={project.code}>Code</a>
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
        classes = "leftProject firstProject";
    } else {
        classes = "leftProject"
    }
    return (
        <div className={classes} onMouseLeave={() => setEntered(false)} onMouseEnter={() => setEntered(true)}>
            <div className="l-inner">
            <div className="foo border-1">
                <img className="projectImage" src={project.image} alt="project1"></img>
            </div>
            {entered ? isViewing : isntViewing}
            </div>
        </div>
    )
}

export default LeftProject
