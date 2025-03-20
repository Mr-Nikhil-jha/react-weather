import { useEffect, useState } from "react";
import ClickButton from "./components/ClickButton";
import Input from "./components/Input";
import SHowWeather from "./components/SHowWeather";
import { GetWeatherData } from "./ApiCall";

function App() {
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);
    const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);
    // console.log(city);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLon(position.coords.longitude);
            setLat(position.coords.latitude);
        });
    }, []); // Run once on mount to get location

    useEffect(() => {
        if (lat !== null && lon !== null) {
            let apiKey = import.meta.env.VITE_API_KEY;
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

            fetch(url)
                .then((response) => response.json())
                .then((result) => setData(result))
                .catch((error) => console.error("Error fetching weather data:", error));
        }
    }, [lat, lon]);

    return (
        <>
            <h1 className="text-6xl font-extrabold text-white text-center mt-12 drop-shadow-xl">Weather App</h1>

            <div className="flex flex-col items-center justify-center bg-gradient-to-r">
                {/* Main Card Container */}

                {/* Weather Data Display */}
                {data && <div className="grid justify-center mt-6 w-full">{data?.cod == "404" ? null : <SHowWeather value={data} prop={{ city, setCity, setData }} />}</div>}
            </div>
        </>
    );
}

export default App;
