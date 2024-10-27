import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherSummary from "./components/WeatherSummary";
import WeatherChart from "./components/WeatherChart";
import "./App.css";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Bangalore");
  const [unit, setUnit] = useState("metric"); // Celsius
  const [inputCity, setInputCity] = useState("");
  const apiKey = "1449885a977b9c873a933564ddf722c6"; // Replace with your OpenWeather API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
      );
      setWeatherData(response.data.list); // Set new weather data
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  // Function to handle search when user clicks button or presses Enter
  const handleSearch = () => {
    if (inputCity.trim() !== "") {
      setCity(inputCity);
    }
  };

  useEffect(() => {
    fetchWeather(); // Initial fetch
    const interval = setInterval(fetchWeather, 300000); // Update every 5 minutes (300,000 ms)
    return () => clearInterval(interval); // Cleanup on unmount
  }, [city, unit]);

  return (
    <div className="app">
      <h1>Weather Monitoring in {city}</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <WeatherCard data={weatherData} />
      <WeatherSummary data={weatherData} />
      <WeatherChart data={weatherData} />
    </div>
  );
};

export default App;
