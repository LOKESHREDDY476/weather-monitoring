import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  const currentWeather = data[0]; // Latest weather data
  const weatherDescription = currentWeather.weather[0].main.toLowerCase(); // Extract weather description
  const iconCode = currentWeather.weather[0].icon; // Weather icon
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Determine background color based on weather description
  const getBackgroundColor = () => {
    if (weatherDescription.includes("rain")) {
      return "black"; // For rainy weather
    } else if (weatherDescription.includes("clear")) {
      return "orange"; // For sunny/clear weather
    }
    return "gray"; // Default background for other weather types
  };

  return (
    <div className="card" style={{ backgroundColor: getBackgroundColor() }}>
      <h2>{currentWeather.dt_txt}</h2>
      <img src={iconUrl} alt="weather icon" />
      <p>Temperature: {currentWeather.main.temp}°C</p>
      <p>Condition: {currentWeather.weather[0].description}</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
