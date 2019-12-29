import React from 'react';
import CityState from './CityState';
import IconTempWind from './IconTempWind';
import FeelsLike from './FeelsLike';

function CurrentWeather(props) {

    return (
        <div className={props.show_weather}>
            <CityState citystate={props.citystate}/>
            <IconTempWind wind_speed={props.wind_speed} wind_direction={props.wind_direction} icon={props.icon} temp={props.temp} />
            <FeelsLike feelsLike={props.feelsLike} />
        </div>
    )
}

export default CurrentWeather;