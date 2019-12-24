import React, { useState } from 'react';

function SearchBar(props) {
    const [name, setName] = useState('Enter City or Zip Code');
    const [max, setMax] = useState(5);

    // restrict length of input based on whether first character is a number or letter
    function handleChange(e) {
        if(parseInt(e.target.value) > -1) {
            setMax(5);
        }
        else {
            setMax(99);
        }

    }

    return (
        <section className="search">
            <div className="input-container">
                <input type="text" onChange={handleChange} maxLength={max} onFocus={() => setName('')} onBlur={() => setName('Enter City or Zip Code')} placeholder={name}  className="user-input" />
            </div>
        </section>
    )
}

export default SearchBar;