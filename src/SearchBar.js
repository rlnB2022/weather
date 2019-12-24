import React, { useState } from 'react';

function SearchBar(props) {
    const [name, setName] = useState('Enter City or Zip Code');
    const [max, setMax] = useState(5);
    const [cityOrZip, setCityOrZip] = useState('');
    const [cityOrZipString, setCityOrZipString] = useState('city');

    // restrict length of input based on whether first character is a number or letter

    function handleChange(e) {
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

        // let sURL = cityOrZipString + '=' + e.target.value;
        // console.log(sURL);
    }

    function handleClick(e) {
        const xhr = new XMLHttpRequest();
        // let sURL = {cityOrZipString} + '=' + {cityOrZip};
        // console.log(sURL);

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                // success
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                // error
            }
        }

        xhr.open('GET','https://api.weatherbit.io/v2.0/current?units=I&key=c74b01fb5d114516a2260d9f3fd04907&' + cityOrZipString + '=' + cityOrZip + '', true);

        xhr.send();
    }

    return (
        <section className="search">
            <div className="input-container">
                <input type="text" onChange={handleChange} maxLength={max} onFocus={() => setName('')} onBlur={() => setName('Enter City or Zip Code')} placeholder={name}  className="user-input" />
                <input type="submit" value="Ok" className="search-ok" onClick={handleClick}/>
            </div>
        </section>
    )
}

export default SearchBar;