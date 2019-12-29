import React from 'react';

function WeatherWind(props) {
    return (
        <div className="weather-wind">
            <p>{props.wind_direction}</p>
            <p>{props.wind_speed} mph</p>
        </div>
    )
}

export default WeatherWind;