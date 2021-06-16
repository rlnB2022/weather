import React from 'react';
import './appheader.css';

function AppHeader(props) {
    return (
        <div id='header-text-id' className="app-header">
            <div className={props.headerText}>
                <p>Rick's Weather App</p>
            </div>
        </div>
    )
}

export default AppHeader;