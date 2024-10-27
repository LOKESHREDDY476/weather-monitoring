import React, { useEffect, useState } from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      const currentTime = new Date();
      setLastUpdated(currentTime.toLocaleTimeString());
    }
  }, [data]); // Update lastUpdated every time data changes

  if (!data || data.length === 0) return <p>No data available</p>;

  const currentWeather = data[0];
  const weatherDescription = currentWeather.weather[0].main.toLowerCase();
  const iconCode = currentWeather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const getBackgroundColor = () => {
    if (weatherDescription.includes("rain")) {
      return "black";
    } else if (weatherDescription.includes("clear")) {
      return "orange";
    }
    return "gray";
  };

  return (
    <div className="card" style={{ backgroundColor: getBackgroundColor() }}>
      <h2>Last updated: {lastUpdated}</h2>
      <img src={iconUrl} alt="weather icon" />
      <p>Temperature: {currentWeather.main.temp}°C</p>
      <p>Condition: {currentWeather.weather[0].description}</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
