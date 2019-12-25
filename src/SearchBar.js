import React, { useState } from 'react';

function SearchBar(props) {

    function handleKeyUp(e) {
        if(e.which === 13 || e.keycode === 13) {
            if(props.cityOrZip === 'postal_code' && e.target.value.length === 5) {
                console.log('inside');
                props.onKeyUp('search search-to-top');
            }
        }
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
        <section className={props.searchBarClassName}>
            <div className="input-container">
                <input type="text" onKeyUp={handleKeyUp} maxLength={props.maxLength} onChange={handleOnChange} onBlur={handleOnBlur} onFocus={handleOnFocus} placeholder={props.searchBarPlaceHolder} className='user-input' />
            </div>
        </section>
    )
}

export default SearchBar;