import React from 'react'
import LeftProject from './LeftProject'
import RightProject from './RightProject'
import ProjectBanner from './ProjectBanner'
const Projects = ({setDark, dark}) => {
    const projectList = [
        {
            first: false,
            name: "Simon",
            image: "images/simon.png",
            desc: (<p className="proj-desc">Built with solely HTML JS and CSS, this project was one of my firsts and lot of fun.
                                            The goal was to design a smooth and unique animation while pressing buttons.
                                            Complete with a "gag" animation of a stick figure "dabbing" I hope you enjoy this remake of Simon.</p>),
            live: "https://gibsoncodes.github.io/GibsonSays/",
            code: "https://github.com/gibsoncodes/GibsonSays"
                                            
        },
        {
            first: true,
            name: "CRUD Your Socks Off",
            image: "images/socks.png",
            desc: (<p className="proj-desc">Stripes, Checkers, Solids, click the sock and bring your designs to life. Built with handlebars, and mongodb. Future plans include adding user based sign on, allowing a view of personal socks, and everyones! Sock companies, lets get in touch!</p>),
            code: "https://github.com/gibsoncodes/CRUDYourSocksOff",
            live: "https://crudyoursocksoff.herokuapp.com/socks",
        },
        {
            first: false,
            name: "LawnMOWA",
            image: "images/lawn.png",
            desc: (<p className="proj-desc">A class assigned project taken much further. I wanted to experiment with dom-manipulated animation. Although its a slow start, I urge you to stick with it, lawn chopping gets wild.</p>),
            live: "https://gibsoncodes.github.io/LawnMOWA/",
            code: "https://github.com/gibsoncodes/LawnMOWA",
        },
        {
            first: false,
            name: "Who's Up",
            image: "images/whosup.png",
            desc: (<p className="proj-desc">Often I find that a simple online search for food at night can be overwhelming. Who's Up puts just the essentials out and could be the difference between getting death glares upon arrival, or just slightly angry glares. Try it out yourself, courtesy of my Google Api key (thus the four mile limit).</p>),
            live: "https://gibsoncodes.github.io/LawnMOWA/",
            code: "https://github.com/gibsoncodes/LawnMOWA",
        }
    ]
    let id = dark ? "dark-body" : null;

    return (
            <div id={id} className="projects">
                <ProjectBanner dark={dark} setDark={setDark}/>
                <RightProject dark={dark} project={projectList[1]}/>
                <RightProject dark={dark} project={projectList[3]}/>
                <RightProject dark={dark} project={projectList[0]}/>
                <RightProject dark={dark} project={projectList[2]}/>
            </div>
    )
}

export default Projects
