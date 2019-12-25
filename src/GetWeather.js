const GetWeather = (e) => {
    if(e.which === 13 || e.keycode === 13) {
        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                // success
                console.log(JSON.parse(xhr.responseText));
                let arrText = JSON.parse(xhr.responseText);

                // move searchBar to the top below the header
                // setSearchBarClassName('search search-to-top');

                // displayInfo(arrText);
            }
            else {
                // error
            }
        }

        xhr.open('GET','https://api.weatherbit.io/v2.0/current?units=I&key=c74b01fb5d114516a2260d9f3fd04907&' + cityOrZipString + '=' + cityOrZip + '', true);

        xhr.send();
    }
}

export default GetWeather;