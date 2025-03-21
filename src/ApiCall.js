const GetWeatherData = async ({ city, setData }) => {
    let apiKey = import.meta.env.VITE_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
    } catch (err) {
        console.error(err, "Unable to fetch data");
    }
};

export { GetWeatherData };
