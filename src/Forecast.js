import React from 'react';
import Day from './Day';

function Forecast(props) {
    return (
        <div className="forecast-container">
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </div>
    )
}

export default Forecast;