const handleSearchChange = (e) => {
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

export default handleSearchChange;