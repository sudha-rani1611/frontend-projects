import React, { useState } from "react";
import sun from "../assets/sun.png";
import rain from "../assets/rain.png";
import mist from "../assets/mist.png";
import cloud from "../assets/cloud.png";
import thunder from "../assets/thunder.png";
import snow from "../assets/snow.png";
import humidit_icony from "../assets/humidit_icony.png";
import wind_icon from "../assets/wind_icon.png";


export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(false);
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState(sun);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [location, setLocation] = useState("");
  const api_key = "b575d46dfe500dc6e06f8022420dd7e5";
  const allIcons = {
    "01d": sun,
    "01n": sun,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": thunder,
    "11n": thunder,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };
 
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async () => {
    if(city!==""){
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || sun;
      console.log(data);
      setWeather(true);
      setHumidity(data.main.humidity);
      setTemp(Math.floor(data.main.temp));
      setIcon(icon);
      setCity(data.name);
      setWind(data.wind.speed);
      setLocation(data.name);
    } catch (error) {
      setWeather(false);
      alert("Error In Fetching data");
      console.log("Error in fethcing data: " + error);
    }
  }
  else
  {
    alert("Enter City!");
  }
  };

  return (
    <div className="wrapper container mt-3">
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Enter City"
          onChange={handleCityChange}
        />
        <button
          id="searchQuerySubmit"
          type="submit"
          name="searchQuerySubmit"
          value={city}
          onClick={handleSubmit}
        >
          <svg id="icon" viewBox="0 0 24 24">
            <path
              fill="#666666"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
      </div>
      {weather ? (
        <>
          <div className="pt-0 pb-5 details">
            <img
              src={icon}
              alt="weather_icon"
              className="w-25 img mt-5 h-25 mb-5"
            />

            <p className="tempearature fs-4">Temperature: {temp} °C</p>
            <p className="city">{location}</p>
            <div className="hd pt-2">
              <div id="hd">
                <div>
                <img src={humidit_icony} className="w-25 h-25" alt="humidity"/>
                </div>
                <div>
                <p className="humidity me-5 ps-5">humidity:{humidity}</p>
                </div>
             
              </div>
              <div id="wind">
                <div>
                <img src={wind_icon} className="w-25 h-25" alt="wind"/>
                </div>
              <div>
              <p className="wind ms-5">Wind:{wind}</p>
              </div>
               
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
