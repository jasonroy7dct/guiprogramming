import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css'; // Import your CSS file for styling transitions
import Main from "./main.js";
import { MAIN_DATA } from "./data.js";

function LandingView() {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [data, setData] = useState(false);
  const zip = "110017";
  const country = "Taiwan";
  const APIkey = "5e78f22c904d774641998d36e37c7ceb";
  // find my home town Taipei, Taiwan! (location is Xianeibu)
  const lat = "25.038410";
  const lon = "121.563698";
  const celsius = "metric";

  useEffect(() => {
    // start the fetching
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${celsius}`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setLoadingData(false);
        setError(false);
        setData(actualData);
        // print the data
        console.log('actualData: ' + JSON.stringify(actualData));
      })
      .catch((err) => {
        setLoadingData(false);
        setError(true);
      });
  }, []);

  console.log('data: ' + JSON.stringify(data));

  // use react-transition-group transitions to fade in/out the different states
  return (
    <React.Fragment>
      <CSSTransition
        in={loadingData || error}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className='Info'>
          loading: {loadingData ? "loading" : "not loading"}
          <br />
          error: {error ? "error" : "not error"}
          <br />
        </div>
      </CSSTransition>

      <CSSTransition
        in={!loadingData && !error && data}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className='Info'>
          Location: {data.name}, Taipei, Taiwan
          <br />
          Current weather description
          <br />
          Weather main: {data.weather && data.weather[0] ? data.weather[0].main || 'N/A' : 'N/A'}
          <br />
          Weather description: {data.weather && data.weather[0] ? data.weather[0].description || 'N/A' : 'N/A'}
          <br />
          Weather icon: {data.weather && data.weather[0] ? data.weather[0].icon || 'N/A' : 'N/A'}
          <br />
          Maximum temperatures of the day: {data.main ? data.main.temp_max : 'N/A'} Celsius
          <br />
          Minimum temperatures of the day: {data.main ? data.main.temp_min : 'N/A'} Celsius
          <br />
          Feels like: {data.main ? data.main.feels_like : 'N/A'} Celsius
          <br />
          Wind speed: {data.wind ? data.wind.speed : 'N/A'}
          <br />
          Wind degree: {data.wind ? data.wind.deg : 'N/A'}
          <br />
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}

export default LandingView;
