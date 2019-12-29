import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';
import WeatherWind from './WeatherWind';

function IconTempWind(props) {
    return (
        <div className="weather-container-inside">
            <WeatherIcon icon={props.icon} />
            <WeatherTemp temp={props.temp} />
            <WeatherWind wind_speed={props.wind_speed} wind_direction={props.wind_direction} />
        </div>
    )
}

export default IconTempWind;