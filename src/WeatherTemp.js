import React from 'react';

function WeatherTemp(props) {
    return (
        <div className="weather-temp">
            {props.temp}
        </div>
    )
}

export default WeatherTemp;