import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import linkIcon from "./link.svg";
import searchIcon from "../assets/search.svg";
import { GetWeatherData } from "../ApiCall";

function Bg() {
  const [city, setCity] = useState("Kota");
  const [data, setData] = useState({});
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);
  const [lang, setLang] = useState(true);
  // console.log(city);

  useEffect(() => {
    (async (_) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric&lang=${lang ? "en" : "hi"}`
      );
      const data = await response.json();
      if (response.ok) {
        setData(data);
        // setError(true);
      } else {
        setError(false);
      }
    })();
  }, []);

  //   GetWeatherData({ city, setData });
  console.log(data);

  return (
    <div className="box">
      <div className="cityName">
        {/* {error ? */}
        {/* // ( */}
        <p>
          {data.name}, {data.sys.country}
          Delhi, IN
          <a href target="_ ">
            <img src={linkIcon} alt="link" />
            <img alt="link" />
          </a>
        </p>
        {/* ) : ( */}
        {/* <p className="invalid"> */}
        {/* {lang ? "Invalid City Name" : "अमान्य शहर का नाम"} */}
        {/* "Invalid City Name" */}
        {/* </p> */}
        {/* )} */}
        <div className="search">
          <input
            type="text"
            value={city}
            // onKeyDown={onkeydownHandler}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
          />
          <img
            style={{ cursor: "pointer" }}
            // onClick={onSubmitHandler}
            src={searchIcon}
            alt="searchIcon"
          />
        </div>
      </div>
      <WeatherCard
      // weatherData={myData}
      // weather={dataWeather}
      // city={cityDetails}
      // lang={lang}
      // windData={windData}
      />
      <p
        //    onClick={() => setLang(!lang)}
        className="translater"
      >
        {/* {lang ? "Hindi ?" : "Eng ?"} */}
        {"Eng ?"}
      </p>
    </div>
  );
}

export default Bg;
