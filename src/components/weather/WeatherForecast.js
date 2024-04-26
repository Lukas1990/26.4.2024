import {useState} from "react"

import ListWeather from "./ListWeather"
import GetWeather from "./GetWeather"

import partly_cloudy from "../../img/partly_cloudy.gif"
import rain from "../../img/rain.gif"
import snow from "../../img/snow.gif"
import temperature from "../../img/temperature.gif"
import wind from "../../img/wind.gif"

function WeatherForecast(props) {

  const {phrase} = props

  const [weatherData, setWeatherData] = useState()

  const handleWeatherData = (data) => {
    setWeatherData(data)
  }

  return (
    <div className="kontajner" id="predpoved">
     
      <GetWeather phrase={phrase} onSubmitData={handleWeatherData} />
      <ListWeather phrase={phrase} weatherData={weatherData} />

      <p>{phrase["The data is obtained"]} <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong></p>
    </div>
  );
}

export default WeatherForecast;
