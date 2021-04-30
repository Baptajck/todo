import React, { useContext, useEffect } from "react";
import { getWeather } from "../../requests/weather";
import ShowWeather from "./ShowWeather";
import { WeatherContext } from "../../context/weather";
import { GET_WEATHER } from "../../types/weather";

const WeatherComponent = () => {
  const [weatherState, dispatch] = useContext(WeatherContext);

  useEffect(() => {
    const initWeather = async () => {
      const data = await getWeather(weatherState.city, weatherState.apiKey);
      dispatch({ type: GET_WEATHER, payload: data });
    };

    initWeather();

    setInterval(() => {
      initWeather();
    }, 3600000);
  }, [dispatch]);

  return (
    <div>
      <ShowWeather />
    </div>
  );
};

export default WeatherComponent;
