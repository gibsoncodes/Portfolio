import React from 'react'

const Me = ({dark}) => {
    let aboutId = dark ? "dark-me" : null;
    let id = dark ? "dark-body" : null;

    return (
        <div id={id} className="me">
            <div id={aboutId} className="about">
                <p className="info promise">My promise to any employer wise enough to hire me, <br></br><span className="bold"> I never give up. </span></p>
                <p className="info c-info">919-985-3508</p>
                <p className="info">emailrileygibson@gmail.com</p>
            </div>
        </div>
    )
}

export default Me
