import React from 'react';

function FeelsLike(props) {
    return (
        <div className="feels-like">
            <h3>Feels Like {props.feelsLike}&deg;</h3>
        </div>
    )
}

export default FeelsLike;