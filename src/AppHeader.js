import React from 'react';

function AppHeader(props) {
    return (
        <div id="header-text-id" className="app-header">
            <div className={props.headerText}>
                The Weather Guy
            </div>
        </div>
    )
}

export default AppHeader;