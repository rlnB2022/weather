import React from 'react';

function FeelsLike(props) {

    let feelsLike = Math.floor(props.feelsLike);

    return (
        <div className="feels-like">
            <h3>Feels Like {feelsLike}&deg;</h3>
        </div>
    )
}

export default FeelsLike;