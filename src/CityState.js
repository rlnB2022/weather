import React from 'react';

function CityState(props) {
    return (
        <React.Fragment className="city-state">
            <h2>{props.citystate}</h2>
        </React.Fragment>
    )
}

export default CityState;