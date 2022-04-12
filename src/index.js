const cityInput = document.querySelector("#cityinput");
const cityNameDisplay = document.querySelector("h2");
const tempDisplay = document.querySelector("h3");
const weatherDisplay = document.querySelector(".weatherd");
const highTempDisplay = document.querySelector(".hightemp");
const lowTempDisplay = document.querySelector(".lowtemp");
const feelsLikeDisplay = document.querySelector(".feelslike");
const humidityDisplay = document.querySelector(".humidity");
const submitBtn = document.querySelector("#btn");
const farenheitBtn = document.querySelector(".farenheit");
const celciusBtn = document.querySelector(".celcius");
const weatherPic = document.querySelector("#weatherpic");

submitBtn.addEventListener("click", function(event) {
        if (cityInput.value !== "") {
            getWeather(cityInput);
        }
})

async function getWeather(input) {
    if (input.value !== "" && input.value !== undefined) {
        const inp = input.value;
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inp}&limit=1&appid=7cca887bcacb1085e8fd6421b8128128`, {mode: 'cors'});
        const cordsData = await response.json();
        const lonCord = await cordsData[0].lon;
        const latCord = await cordsData[0].lat;
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latCord}&lon=${lonCord}&units=imperial&appid=7cca887bcacb1085e8fd6421b8128128`, {mode: 'cors'});
        const weatherData = await response2.json();
        console.log(weatherData);
        const cityName = weatherData.name;
        let temp = Math.round(weatherData.main.temp);
        let feelsLike = Math.round(weatherData.main.feels_like);
        const humidity = weatherData.main.humidity;
        let tempMax = Math.round(weatherData.main.temp_max);
        let tempMin = Math.round(weatherData.main.temp_min);
        const weatherM = weatherData.weather[0].main;
        if (weatherM == "Rain") {
            weatherPic.src = "../src/img/rain.png";
        }
        if (weatherM == "Clouds") {
            weatherPic.src = "../src/img/cloudy.png";
        }
        if (weatherM == "Clear") {
            weatherPic.src = "../src/img/clear.png";
        }
        const country = weatherData.sys.country;
        if (celciusBtn.style.backgroundColor == "honeydew") {
            temp = Math.round(farenheitToCelcius(temp));
            feelsLike = Math.round(farenheitToCelcius(feelsLike));
            tempMax = Math.round(farenheitToCelcius(tempMax));
            tempMin = Math.round(farenheitToCelcius(tempMin));
        }
        cityNameDisplay.textContent = cityName + `, ${country}`;
        tempDisplay.textContent = temp + "°";
        weatherDisplay.textContent = weatherM;
        highTempDisplay.textContent = "H: " + tempMax + "°";
        lowTempDisplay.textContent = "L: " + tempMin + "°"
        feelsLikeDisplay.textContent = "Feels like " + feelsLike + "°";
        humidityDisplay.textContent = "Humidity: " +humidity + "%";
    }
}

celciusBtn.addEventListener("click", function() {
    farenheitBtn.style.backgroundColor = "inherit";
    celciusBtn.style.backgroundColor = "honeydew";
    getWeather(cityInput);
})

farenheitBtn.addEventListener("click", function() {
    celciusBtn.style.backgroundColor = "inherit";
    farenheitBtn.style.backgroundColor = "honeydew";
    getWeather(cityInput);
})

farenheitToCelcius = function(x) {
    return (x - 32) * 5/9;
}