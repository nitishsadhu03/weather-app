const API_KEY = "70d990eeaef04114851a06f0d5a1cc75";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infotype, searchparams) => {
    const url = new URL(BASE_URL + "/" + infotype);
    url.search = new URLSearchParams({...searchparams, appid:API_KEY});

    return fetch(url)
    .then((res) => res.json());
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat,lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const getFormattedWeatherData = async (searchparams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchparams).then(formatCurrentWeather)

    return formattedCurrentWeather
}

export default getFormattedWeatherData