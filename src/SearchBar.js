import React, { useState } from 'react';

function SearchBar(props) {
    const [name, setName] = useState('Enter City or Zip Code');

    return (
        <section className="search">
            <div className="input-container">
                <input type="text" onFocus={() => setName('')} onBlur={() => setName('Enter City or Zip Code')} placeholder={name}  className="user-input"/>
            </div>
        </section>
    )
}

export default SearchBar;