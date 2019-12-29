import React from 'react';

function WeatherTemp(props) {

    let temp = Math.floor(props.temp);

    return (
        <div className="weather-temp">
            {temp}
        </div>
    )
}

export default WeatherTemp;