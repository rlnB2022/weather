import React, { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
// import GetWeather from './GetWeather';

function App() {

  const [curWeather, setCurWeather] = useState(null);
  const [name, setName] = useState('Enter City or Zip Code');
  const [max, setMax] = useState(5);
  const [cityOrZip, setCityOrZip] = useState('');
  const [cityOrZipString, setCityOrZipString] = useState('city');
  const [searchBarClassName, setSearchBarClassName] = useState('search');

  function handleOnChange(e) {
    console.log(e.target.value);
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

  function handleSearchPlaceHolder(newValue) {
    setName(newValue);
  }

  function handleOnFocus(newValue) {
    setName(newValue);
  }

  function handleOnBlur(newValue) {
    setName(newValue);
  }

  return (
    <div className="App">
      <AppHeader />
      <SearchBar searchBarPlaceHolder={name} onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleOnChange} maxLength={max} />
      <CurrentWeather />
    </div>
  );
}

export default App;