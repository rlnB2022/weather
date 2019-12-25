import React, { useState } from 'react';

function SearchBar(props) {
    // const [name, setName] = useState('Enter City or Zip Code');
    // const [max, setMax] = useState(5);
    // const [cityOrZip, setCityOrZip] = useState('');
    // const [cityOrZipString, setCityOrZipString] = useState('city');
    const [searchBarClassName, setSearchBarClassName] = useState('search');

    // restrict length of input based on whether first character is a number or letter
    function handleChange(e) {
        props.onChange(e);
        // if(parseInt(e.target.value) > -1) {
        //     setMax(5);
        //     setCityOrZipString('postal_code');
        //     setCityOrZip(e.target.value);
        // }
        // else {
        //     setMax(99);
        //     setCityOrZipString('city');
        //     setCityOrZip(e.target.value);
        // }
    }

    // function handleKeyUp(e) {
    //     if(e.which === 13 || e.keycode === 13) {
    //         const xhr = new XMLHttpRequest();

    //         xhr.onload = () => {
    //             if(xhr.status >= 200 && xhr.status < 300) {
    //                 // success
    //                 console.log(JSON.parse(xhr.responseText));
    //                 let arrText = JSON.parse(xhr.responseText);

    //                 // move searchBar to the top below the header
    //                 setSearchBarClassName('search search-to-top');

    //                 // displayInfo(arrText);
    //             }
    //             else {
    //                 // error
    //             }
    //         }

    //         xhr.open('GET','https://api.weatherbit.io/v2.0/current?units=I&key=c74b01fb5d114516a2260d9f3fd04907&' + cityOrZipString + '=' + cityOrZip + '', true);

    //         xhr.send();
    //     }
    // }

    function handleOnFocus() {
        props.onFocus(' ');
    }

    function handleOnBlur() {
        props.onFocus('Enter City or Zip Code');
    }

    function handleOnChange(e) {
        props.onChange(e);
    }

    return (
        <section className={searchBarClassName}>
            <div className="input-container">
                <input type="text" maxLength={props.maxLength} onChange={handleOnChange} onBlur={handleOnBlur} onFocus={handleOnFocus} placeholder={props.searchBarPlaceHolder} className='user-input' />
            </div>
        </section>
    )
}

export default SearchBar;