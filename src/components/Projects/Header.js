import React from 'react'
import { useState } from 'react'

const Header = ({dark}) => {
    // const [hover, setHover] = useState(false)
    let divId = dark ? "dark-header" : null;
    let titleId = dark ? "dark-title" : null;

    // function handler() {
    //     setHover(!hover)
    // }

    // window.onscroll = () => {
    //     setHover(true)
    // }

    return (
        <div id={divId} className="header">
            <h1 id={titleId} className="header-title">Riley Gibson</h1>
            {/* <p id={titleId} className="gcodes">{hover ? "gibson codes" : null}</p> */}
        </div>
    )
}

export default Header
