import React, { useState } from 'react';
import AppHeader from './AppHeader';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';

function App() {

  const [name, setName] = useState('Enter City or Zip Code');
  const [max, setMax] = useState(5);
  const [cityOrZip, setCityOrZip] = useState('');
  const [cityOrZipString, setCityOrZipString] = useState('city');
  const [searchBarClassName, setSearchBarClassName] = useState('search');
  const [temp, setTemp] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [showWeather, setShowWeather] = useState('current-weather-container');
  const [appTemp, setAppTemp] = useState(0);
  const [cityState, setCityState] = useState('');
  const [headerText, setHeaderText] = useState('header-text');

  let arrWeather = {};

  function getWeather() {
    // reposition searchBar
    setSearchBarClassName('search search-to-top');

    // perform the search
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            // success
            arrWeather = JSON.parse(xhr.responseText);

            setTemp(arrWeather.data[0].temp);
            setWindSpeed(arrWeather.data[0].wind_spd);
            setShowWeather('current-weather-container show-current-weather-container');
            setAppTemp(arrWeather.data[0].app_temp);

            // City and State
            let currentCity = arrWeather.data[0].city_name;
            let currentState = arrWeather.data[0].state_code;
            let currentCityState = currentCity + ', ' + currentState;
            
            setCityState(currentCityState);

        }
        else {
            // error
        }
    }

    xhr.open('GET','https://api.weatherbit.io/v2.0/current?units=I&key=c74b01fb5d114516a2260d9f3fd04907&' + cityOrZipString + '=' + cityOrZip + '', true);

    xhr.send();
  }

  function handleOnChange(e) {
    if(parseInt(e.target.value) > -1) {
      setMax(5);
      setCityOrZipString('postal_code');
      setCityOrZip(e.target.value);
    }
    else {
      setMax(99);
      setCityOrZipString('city');
      setCityOrZip(e.target.value);
    }
  }

  function handleOnFocus(newValue) {
    setName(newValue);
  }

  function handleOnBlur(newValue) {
    setName(newValue);
  }

  function handleOnKeyUp() {
    setHeaderText('header-text header-text-small');
  }

  return (
    <div className="App">
      <AppHeader headerText={headerText} />
      <SearchBar getWeather={getWeather} cityOrZip={cityOrZipString} onKeyUp={handleOnKeyUp} searchBarClassName={searchBarClassName} searchBarPlaceHolder={name} onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleOnChange} maxLength={max} />
      <CurrentWeather citystate={cityState} show_weather={showWeather} wind_speed={windSpeed} temp={temp} feelsLike={appTemp}/>
    </div>
  );
}

export default App;