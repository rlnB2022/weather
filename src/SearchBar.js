import React from 'react';
import './search.css';

function SearchBar(props) {

    function handleKeyUp(e) {
        if(e.which === 13 || e.keycode === 13) {
            // if(props.cityOrZip === 'postal_code' && e.target.value.length === 5) {
                document.getElementById('header-text-id').addEventListener('transitionend', props.getWeather());
                props.onKeyUp();
            // }
        }
    }

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
        <section id="searchBar" className={props.searchBarClassName}>
            <div className="input-container">
                <input type="text" onKeyUp={handleKeyUp} maxLength={props.maxLength} onChange={handleOnChange} onBlur={handleOnBlur} onFocus={handleOnFocus} placeholder={props.searchBarPlaceHolder} className={props.inputClassName} />
            </div>
        </section>
    )
}

export default SearchBar;