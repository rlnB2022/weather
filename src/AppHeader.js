import React from 'react';
import './appheader.css';

function AppHeader(props) {
    return (
        <div className="app-header">
            <p id='header-text-id' className={props.headerText}>Rick's Weather App</p>
        </div>
    )
}

export default AppHeader;