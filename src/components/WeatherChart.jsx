import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  const chartData = {
    labels: data.map((entry) => entry.dt_txt),
    datasets: [
      {
        label: "Temperature (°C)",
        data: data.map((entry) => entry.main.temp),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Temperature Trend</h2>
      <Line data={chartData} />
    </div>
  );
};

export default WeatherChart;
