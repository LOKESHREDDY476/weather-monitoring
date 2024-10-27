import React from "react";
import "./WeatherSummary.css";

const WeatherSummary = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  // Group by day and calculate average temperature, max/min temperatures
  const dailySummary = data.reduce((acc, entry) => {
    const date = entry.dt_txt.split(" ")[0];
    if (!acc[date]) {
      acc[date] = { 
        temps: [], 
        max: entry.main.temp, 
        min: entry.main.temp,
        icon: entry.weather[0].icon, // Store the weather icon
        weather: entry.weather[0].main.toLowerCase() // Store weather condition
      };
    }
    acc[date].temps.push(entry.main.temp);
    acc[date].max = Math.max(acc[date].max, entry.main.temp);
    acc[date].min = Math.min(acc[date].min, entry.main.temp);
    return acc;
  }, {});

  const getBackgroundColor = (weather) => {
    if (weather.includes("rain")) {
      return "black"; // Rainy weather
    } else if (weather.includes("clear")) {
      return "orange"; // Sunny/clear weather
    }
    return "gray"; // Default background for other weather types
  };

  return (
    <>
      <h2>Daily Summary</h2>
    <div className="summary-grid">
      {Object.keys(dailySummary).map((date) => {
        const avgTemp =
          dailySummary[date].temps.reduce((a, b) => a + b, 0) /
          dailySummary[date].temps.length;
        const iconUrl = `http://openweathermap.org/img/wn/${dailySummary[date].icon}@2x.png`;
        const weatherCondition = dailySummary[date].weather;

        return (
          <div
            key={date}
            className="summary-card"
            style={{ backgroundColor: getBackgroundColor(weatherCondition) }}
          >
            <h3>{date}</h3>
            <img src={iconUrl} alt="weather icon" />
            <p>Average Temperature: {avgTemp.toFixed(2)}°C</p>
            <p>Max Temperature: {dailySummary[date].max}°C</p>
            <p>Min Temperature: {dailySummary[date].min}°C</p>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default WeatherSummary;
