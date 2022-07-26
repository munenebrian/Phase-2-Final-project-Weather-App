const API_KEY = '6d8edebf6ae0e79385fd677f52dccb28';
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res)=> res.json())
};

const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather')
}