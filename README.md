# Real-Time Weather Monitoring System

## Objective
The Real-Time Weather Monitoring System is designed to continuously retrieve and process weather data from the OpenWeatherMap API, providing summarized insights using rollups and aggregates. This application focuses on monitoring the weather conditions in major Indian metros and alerting users based on configurable thresholds.

## Features
- **Continuous Weather Data Retrieval**: The system retrieves weather data every 5 minutes for specified cities.
- **Temperature Conversion**: Converts temperature values from Kelvin to Celsius (or Fahrenheit based on user preference).
- **Daily Weather Summary**: Calculates daily aggregates, including:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
  - Dominant weather condition
- **Alerting Thresholds**: Triggers alerts if specified temperature or weather conditions are exceeded.
- **Visualizations**: Displays daily weather summaries and historical trends.

## Data Source
The application utilizes the OpenWeatherMap API. To access the API, you will need to sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/).

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)
- A valid OpenWeatherMap API key
- A MongoDB database for storing historical data

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/LOKESHREDDY476/weather-monitoring.git.
   cd weather-monitoring
Install dependencies:


'''
npm install
'''
***Run the application:***

bash

npm start
**Usage**
The application will start fetching weather data every 5 minutes.
Alerts will be logged to the console when thresholds are breached.
Visualizations will be generated based on the daily weather summaries.
Testing
The application includes test cases to verify functionality. You can run the tests using:
npm test
**Test Cases**
System Setup: Verify the application starts and connects to the OpenWeatherMap API.
Data Retrieval: Simulate API calls and ensure correct data parsing.
Temperature Conversion: Validate conversion of temperature values based on user preference.
Daily Weather Summary: Verify that daily summaries are calculated correctly.
Alerting Thresholds: Test threshold alerts and ensure they are triggered appropriately.
**Bonus Features**
Support for additional weather parameters (e.g., humidity, wind speed).
Retrieve weather forecasts and generate summaries based on predicted conditions.
**Code Structure**
src/: Contains the main application code.
components/: Includes reusable components for weather data visualization.
services/: Handles API interactions and data processing logic.
tests/: Contains test cases to ensure application functionality.


##Createdby:LokeshReddy Marri