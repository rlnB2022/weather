import React, { useState } from 'react';
import AppHeader from './AppHeader';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

function App() {

  // Current variables
  const [name, setName] = useState('Enter City or Zip Code');
  const [max, setMax] = useState(5);
  const [cityOrZip, setCityOrZip] = useState('');
  const [cityOrZipString, setCityOrZipString] = useState('city');
  const [searchBarClassName, setSearchBarClassName] = useState('search');
  const [temp, setTemp] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirection, setWindDirection] = useState('N');
  const [showWeather, setShowWeather] = useState('current-weather-container');
  const [appTemp, setAppTemp] = useState(0);
  const [cityState, setCityState] = useState('');
  const [headerText, setHeaderText] = useState('header-text');
  const [icon, setIcon] = useState('c01d');
  const [weatherDesc, setWeatherDesc] = useState('');

  // Forecast variables
  const [showForecast, setShowForecast] = useState('forecast-container');
  const [dayOneDay, setDayOneDay] = useState('');
  const [dayTwoDay, setDayTwoDay] = useState('');
  const [dayThreeDay, setDayThreeDay] = useState('');
  const [dayFourDay, setDayFourDay] = useState('');
  const [dayFiveDay, setDayFiveDay] = useState('');
  
  const [dayOneMonth, setDayOneMonth] = useState('');
  const [dayTwoMonth, setDayTwoMonth] = useState('');
  const [dayThreeMonth, setDayThreeMonth] = useState('');
  const [dayFourMonth, setDayFourMonth] = useState('');
  const [dayFiveMonth, setDayFiveMonth] = useState('');

  const [dayOneIcon, setDayOneIcon] = useState('c01d');
  const [dayTwoIcon, setDayTwoIcon] = useState('c01d');
  const [dayThreeIcon, setDayThreeIcon] = useState('c01d');
  const [dayFourIcon, setDayFourIcon] = useState('c01d');
  const [dayFiveIcon, setDayFiveIcon] = useState('c01d');

  const [dayOneTemp, setDayOneTemp] = useState(0);
  const [dayTwoTemp, setDayTwoTemp] = useState(0);
  const [dayThreeTemp, setDayThreeTemp] = useState(0);
  const [dayFourTemp, setDayFourTemp] = useState(0);
  const [dayFiveTemp, setDayFiveTemp] = useState(0);

  const [dayOneDate, setDayOneDate] = useState();
  const [dayTwoDate, setDayTwoDate] = useState();
  const [dayThreeDate, setDayThreeDate] = useState();
  const [dayFourDate, setDayFourDate] = useState();
  const [dayFiveDate, setDayFiveDate] = useState();

  let arrWeather = {};
  let arrForecast = {};
  let weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  function getDayOfWeek(date) {
    let newDate = new Date(date);
    let day = weekday[newDate.getDay()];

    return day;
  }

  function getMonth(date) {
    let newDate = new Date(date);
    let month = monthName[newDate.getMonth()];

    return month;
  }

  function getNumericDay(date) {
    let newDate = new Date(date);

    return newDate.getDate();
  }

  function getForecast() {
    // perform the search
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          // success
          arrForecast = JSON.parse(xhr.responseText);

          // days
          setDayOneDay(getDayOfWeek(arrForecast.data[1].datetime));
          setDayTwoDay(getDayOfWeek(arrForecast.data[2].datetime));
          setDayThreeDay(getDayOfWeek(arrForecast.data[3].datetime));
          setDayFourDay(getDayOfWeek(arrForecast.data[4].datetime));
          setDayFiveDay(getDayOfWeek(arrForecast.data[5].datetime));

          // months
          setDayOneMonth(getMonth(arrForecast.data[1].datetime));
          setDayTwoMonth(getMonth(arrForecast.data[2].datetime));
          setDayThreeMonth(getMonth(arrForecast.data[3].datetime));
          setDayFourMonth(getMonth(arrForecast.data[4].datetime));
          setDayFiveMonth(getMonth(arrForecast.data[5].datetime));

          // numeric day
          setDayOneDate(getNumericDay(arrForecast.data[1].datetime));
          setDayTwoDate(getNumericDay(arrForecast.data[2].datetime));
          setDayThreeDate(getNumericDay(arrForecast.data[3].datetime));
          setDayFourDate(getNumericDay(arrForecast.data[4].datetime));
          setDayFiveDate(getNumericDay(arrForecast.data[5].datetime));

          // icons
          setDayOneIcon(arrForecast.data[1].weather.icon);
          setDayTwoIcon(arrForecast.data[2].weather.icon);
          setDayThreeIcon(arrForecast.data[3].weather.icon);
          setDayFourIcon(arrForecast.data[4].weather.icon);
          setDayFiveIcon(arrForecast.data[5].weather.icon);

          // show forecast
          setShowForecast('forecast-container show-forecast-container');

          // temps
          setDayOneTemp(arrForecast.data[1].high_temp);
          setDayTwoTemp(arrForecast.data[2].high_temp);
          setDayThreeTemp(arrForecast.data[3].high_temp);
          setDayFourTemp(arrForecast.data[4].high_temp);
          setDayFiveTemp(arrForecast.data[5].high_temp);

        }
        else {
            // error
        }
    }

    xhr.open('GET','https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&key=c74b01fb5d114516a2260d9f3fd04907&' + cityOrZipString + '=' + cityOrZip + '', true);

    xhr.send();
  }

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
            setWindDirection(arrWeather.data[0].wind_cdir);
            setShowWeather('current-weather-container show-current-weather-container');
            setAppTemp(arrWeather.data[0].app_temp);
            setWeatherDesc(arrWeather.data[0].weather.description);

            // City and State
            let currentCity = arrWeather.data[0].city_name;
            let currentState = arrWeather.data[0].state_code;
            let currentCityState = currentCity + ', ' + currentState;
            
            setCityState(currentCityState);
            setIcon(arrWeather.data[0].weather.icon);

            getForecast();

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
      <CurrentWeather weather_desc={weatherDesc} wind_direction={windDirection} icon={icon} citystate={cityState} show_weather={showWeather} wind_speed={windSpeed} temp={temp} feelsLike={appTemp}/>
      <Forecast show_forecast={showForecast} dayOneDay={dayOneDay} dayTwoDay={dayTwoDay} dayThreeDay={dayThreeDay} dayFourDay={dayFourDay} dayFiveDay={dayFiveDay} dayOneMonth={dayOneMonth} dayTwoMonth={dayTwoMonth} dayThreeMonth={dayThreeMonth} dayFourMonth={dayFourMonth} dayFiveMonth={dayFiveMonth} dayOneDate={dayOneDate} dayTwoDate={dayTwoDate} dayThreeDate={dayThreeDate} dayFourDate={dayFourDate} dayFiveDate={dayFiveDate} dayOneIcon={dayOneIcon} dayTwoIcon={dayTwoIcon} dayThreeIcon={dayThreeIcon} dayFourIcon={dayFourIcon} dayFiveIcon={dayFiveIcon} dayOneTemp={dayOneTemp} dayTwoTemp={dayTwoTemp} dayThreeTemp={dayThreeTemp} dayFourTemp={dayFourTemp} dayFiveTemp={dayFiveTemp}/>
    </div>
  );
}

export default App;