import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
// import linkIcon from "/public/assets/link.svg";
import searchIcon from "/public/assets/search.svg";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";

function Bg({ setLoad }) {
  const [city, setCity] = useState("New Delhi");
  const [data, setData] = useState({});
  const [longitude, setLon] = useState(null);
  const [latitude, setLat] = useState(null);
  const [lang, setLang] = useState(true);
  const [scale, setScale] = useState(1);
  // console.log(city);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    function success(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      if (latitude && longitude) GetGeoLocationData();
    }

    function error() {
      getCityWeatherData();
    }
  }, [latitude, longitude]);
  // useEffect(()=>{},[setLoad])
  const GetGeoLocationData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      await fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result));
      setCity("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoad(false);
    }
  };

  const getCityWeatherData = () => {
    if (city === "") return;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));
    setCity("");
  };

  return (
    <div className="box">
      <div className="cityName">
        {Object.keys(data).length > 0 && data.cod != "404" && (
          <p>
            {data.name}, {data.sys.country}
          </p>
        )}
        <div className="search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
            onKeyDown={(e) => e.key === "Enter" && getCityWeatherData()}
          />
          <img
            style={{
              cursor: "pointer",
              transform: `scale(${scale})`,
              transition: "transform 0.2s ease-in-out",
            }}
            src={searchIcon}
            alt="searchIcon"
            onClick={getCityWeatherData}
            onMouseEnter={() => setScale(1.2)} // Zoom in
            onMouseLeave={() => setScale(1)} // Reset size
          />
          {/* <MyLocationRoundedIcon className=" cursor-pointer" color="action" onClick={getCityWeatherData} /> */}
        </div>
      </div>
      {Object.keys(data).length > 0 && data.cod == "404" && (
        <p className="invalid text-2xl">{"Invalid City Name"}</p>
      )}
      {Object.keys(data).length > 0 && data.cod != 404 ? (
        <WeatherCard
          sys={data.sys}
          weatherData={data.main}
          weather={data.weather}
          city={data.name}
          lang={lang}
          windData={data.wind}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Bg;
