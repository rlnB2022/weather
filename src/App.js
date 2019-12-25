import React, { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';

function App() {

  const [name, setName] = useState('Enter City or Zip Code');
  const [max, setMax] = useState(5);
  const [cityOrZip, setCityOrZip] = useState('');
  const [cityOrZipString, setCityOrZipString] = useState('city');
  const [searchBarClassName, setSearchBarClassName] = useState('search');
  const [curWeather, setCurWeather] = useState(null);

  function getWeather() {
    // perform the search
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            // success
            console.log(JSON.parse(xhr.responseText));
            let arrText = JSON.parse(xhr.responseText);

            // displayInfo(arrText);
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

  function handleOnKeyUp(newValue) {
    setSearchBarClassName(newValue);
  }

  return (
    <div className="App">
      <AppHeader />
      <SearchBar getWeather={getWeather} cityOrZip={cityOrZipString} onKeyUp={handleOnKeyUp} searchBarClassName={searchBarClassName} searchBarPlaceHolder={name} onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleOnChange} maxLength={max} />
      <CurrentWeather />
    </div>
  );
}

export default App;