import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherSummary from "./components/WeatherSummary";
import WeatherChart from "./components/WeatherChart";
import "./App.css";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Bangalore");
  const [unit, setUnit] = useState("metric");
  const [inputCity, setInputCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const apiKey = "1449885a977b9c873a933564ddf722c6"; // Replace with your OpenWeather API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
      );
      setWeatherData(response.data.list);
      setErrorMessage(""); // Clear error message if data is successfully fetched
    } catch (error) {
      console.error("Error fetching weather data", error);
      setWeatherData([]); // Clear weather data if there’s an error
      setErrorMessage("No data found for the entered city. Please check the spelling and try again.");
    }
  };

  const handleSearch = () => {
    if (inputCity.trim() !== "") {
      setCity(inputCity);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Update every 5 minutes
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

      {errorMessage ? (
        <p className="error-message">{errorMessage}</p> // Display error message
      ) : (
        <>
          <WeatherCard data={weatherData} />
          <WeatherSummary data={weatherData} />
          <WeatherChart data={weatherData} />
        </>
      )}
    </div>
  );
};

export default App;
