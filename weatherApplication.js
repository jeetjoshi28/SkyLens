let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");

// To get the actual country name
const getCountryName = (code) => {
    try {
        return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
    } catch {
        return code; // Fallback to the country code
    }
};

// To get the date and time
const getDateTime = (dt) => {
    const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(curDate);
};

let city = "pune";

// Search functionality
citySearch.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityInput = document.querySelector(".city_name");
    city = cityInput.value;

    getWeatherData();

    cityInput.value = "";
});

const getWeatherData = async () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9abb85351efb53a222305874d75b6de4`;
    try {
        const res = await fetch(weatherUrl);
        if (!res.ok) throw new Error(`City not found: ${city}`);
        const data = await res.json();

        const { main, name, weather, wind, sys, dt } = data;

        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerHTML = getDateTime(dt);

        w_forecast.innerHTML = weather[0].main;
        w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" alt="Weather Icon" />`;

        w_temperature.innerHTML = `${main.temp.toFixed(1)}&#176;C`;
        w_minTem.innerHTML = `Min: ${main.temp_min.toFixed(1)}&#176;C`;
        w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed(1)}&#176;C`;

        w_feelsLike.innerHTML = `${main.feels_like.toFixed(1)}&#176;C`;
        w_humidity.innerHTML = `${main.humidity}%`;
        w_wind.innerHTML = `${wind.speed} m/s`;
        w_pressure.innerHTML = `${main.pressure} hPa`;
    } catch (error) {
        console.error(error);
    }
};

// Load weather data on page load
window.addEventListener("load", getWeatherData);
