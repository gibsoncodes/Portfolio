import React from 'react'

const Me = ({dark}) => {
    let aboutId = dark ? "dark-me" : null;
    let id = dark ? "dark-body" : null;

    return (
        <div id={id} className="me">
            <div className="portrait-container">
                <div className="portrait">
                    <img className="portraitImg" src="images/portrait.png" alt="portrait"></img>
                </div>
                <div >
                    <p className="who-i-am">Currently located in Raleigh, NC. I am employed as a sandwhich artist at Jersey Mikes and I make great subs. What I love about programming is that it is an infinitely rich world. I like to incorporate elements of fun and adventure into my work. It brings about a more interesting user experience and logical, mathematical code is what keeps me going. I am seeking employment so that I can be a part of something, have my work reach a larger audience, and write great code.</p>
                    <div id={aboutId} className="about">
                <p className="info promise">My promise to any employer wise enough to hire me, <br></br><span className="bold"> I never give up. </span></p>
                <p className="info c-info">919-985-3508</p>
                <p className="info">emailrgibson@gmail.com</p>
            </div>
                </div>
            </div>
            <div className="mobile-contact">
                <a href="https://github.com/gibsoncodes"rel="noopener noreferrer" target="_blank" ><img className="link github" src="images/github.png" alt="linkedin"></img></a>
                <a href="https://www.linkedin.com/in/gibsoncodes/" rel="noopener noreferrer" target="_blank"><img className="link linkedin" src="images/linked.png" alt="linkedin"></img></a>
                <a href="Resume.pdf" rel="noopener noreferrer" target="_blank"><img  className="link resume" src="images/resume.png" alt="linkedin"></img></a>
            </div>
            <div className="mobile-skills">
                <img className="mobile-skill" src="images/tryouts/git.svg" alt="git"></img>
                <img className="mobile-skill" id="js" src="images/tryouts/js.svg" alt="git"></img>
                <img className="mobile-skill"  id="react" src="images/tryouts/react.svg" alt="git"></img>
                <img className="mobile-skill"  id="mongo" src="images/tryouts/mongo.svg" alt="git"></img>
                <img className="mobile-skill"  src="images/tryouts/node.svg" alt="git"></img>
                <img className="mobile-skill" id="django" src="images/tryouts/django.svg" alt="git"></img>
                <img className="mobile-skill" src="images/ts.png" alt="git"></img>
                <img className="mobile-skill" src="images/swift.png" alt="git"></img>
            </div>
        </div>
    )
}

export default Me
