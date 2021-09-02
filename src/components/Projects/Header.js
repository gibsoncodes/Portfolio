import React from 'react'

const Header = ({dark}) => {
    let divId = dark ? "dark-header" : null;
    let titleId = dark ? "dark-title" : null;

    return (
        <div id={divId} className="header">
            <h1 id={titleId} className="header-title">Riley Gibson</h1>
        </div>
    )
}

export default Header
