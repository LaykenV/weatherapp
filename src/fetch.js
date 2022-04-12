 async function getWeather(input) {
    console.log("lol");
    const inp = input.value;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inp}&limit=1&appid=7cca887bcacb1085e8fd6421b8128128`, {mode: 'cors'});
    const cordsData = await response.json();
    const lonCord = await cordsData[0].lon;
    const latCord = await cordsData[0].lat;
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latCord}&lon=${lonCord}&units=imperial&appid=7cca887bcacb1085e8fd6421b8128128`, {mode: 'cors'});
    const weatherData = await response2.json();
    console.log(weatherData);
    return weatherData;
    //console.log(weatherData);
    //const temp = weatherData.main.temp;
    //const feelsLike = weatherData.main.feels_like;
    //const humidity = weatherData.main.humidity;
    //const tempMax = weatherData.main.temp_max;
    //const tempMin = weatherData.main.temp_min;
    //const weatherM = weatherData.weather[0].main;
    //const country = weatherData.sys.country;
}




export {getWeather};
