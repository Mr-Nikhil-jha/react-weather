let apiKey = import.meta.env.VITE_API_KEY;

function GetWeatherData({ city, setWData }) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => setWData(result));
}

export { GetWeatherData };
