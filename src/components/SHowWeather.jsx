import React from "react";
import { GetWeatherData } from "../ApiCall";

export default function SHowWeather({ value, prop }) {
    let setWData = prop.setData;
    let city = prop.city;
    const getWeatherData = () => {
        GetWeatherData({ city, setWData });
    };

    return (
        <div className="flex items-center justify-center ">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-2xl shadow-lg w-80">
                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-full px-4 py-2 mb-4">
                    <input type="text" value={prop.city} onChange={(e) => prop.setCity(e.target.value)} placeholder="Search" className="flex-1 outline-none bg-transparent text-gray-700" />
                    <svg className="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={getWeatherData}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>

                {/* Weather Info */}
                <div className="text-center text-white">
                    <div className="flex justify-center items-center mb-2">
                        <div className="relative">
                            <div className="w-12 h-12 bg-yellow-400 rounded-full absolute top-1 left-2 opacity-0"></div>
                            <img src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`} alt="search" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold">{value.main.temp}°C</h2>
                    <p className="text-lg">{value.name}</p>
                </div>

                {/* Humidity & Wind Speed */}
                <div className="flex justify-between items-center text-white mt-4">
                    <div className="flex flex-col items-center opacity-0">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16a4 4 0 100-8 4 4 0 000 8zM12 16a4 4 0 100-8 4 4 0 000 8zM20 16a4 4 0 100-8 4 4 0 000 8z"></path>
                        </svg>
                        <p className="text-sm">{value.main.humidity}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M5 16h14M7 20h10"></path>
                        </svg>
                        <p className="text-sm">{value.wind.speed} Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
