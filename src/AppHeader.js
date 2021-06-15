import React from 'react';
import './appheader.css';

function AppHeader(props) {
    return (
        <div id='header-text-id' className={"app-header"}>
            <div className={props.headerText}>
                <p>The Weather Guy</p>
            </div>
        </div>
    )
}

export default AppHeader;