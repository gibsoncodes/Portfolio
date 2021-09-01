import React from 'react'

const Skills = ({setInfo}) => {
    return (
        <div onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)} className="skills">
            <img className="skill firstSkill" src="images/git.png" alt="git"></img>
            <img className="skill" src="images/jsicon.png" alt="git"></img>
            <img className="skill" id="react" src="images/react2.png" alt="git"></img>
            <img className="skill" id="mongo" src="images/mongo2.png" alt="git"></img>
            <img className="skill" id="node" src="images/truenode.png" alt="git"></img>
            <img className="skill" src="images/tscript.png" alt="git"></img>
            <img className="skill" src="images/swift.png" alt="git"></img>
        </div>
    )
}

export default Skills
