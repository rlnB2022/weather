import React from 'react';
import './appheader.css';

function AppHeader(props) {
    return (
        <div className="app-header">
            <div>
                <p id='header-text-id' className={props.headerText}>Rick's Weather App</p>
            </div>
        </div>
    )
}

export default AppHeader;