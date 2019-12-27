import React from 'react';
import CityState from './CityState';
import IconTempWind from './IconTempWind';
import FeelsLike from './FeelsLike';

function CurrentWeather(props) {

    return (
        <div className={props.show_weather}>
            <CityState citystate={props.citystate}/>
            <IconTempWind />
            <FeelsLike />
        </div>
    )
}

export default CurrentWeather;