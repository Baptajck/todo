import React, { Fragment, useContext } from "react";
import { WeatherContext } from "../../context/weather";

const ShowWeather = () => {
  const [weatherState] = useContext(WeatherContext);

  return (
    <Fragment>
      {weatherState.weather.weather ? (
        <div>
          {weatherState.weather.weather.map((item, index) => {
            return (
              <div className="" key={index}>
                <h3 className="card-header">Weather</h3>
                <div className="card-body">
                  <h5 className="card-title">{weatherState.weather.name}</h5>
                  <h6 className="card-subtitle text-muted">
                    {item.description} - {weatherState.weather.main.temp}°C
                  </h6>
                </div>
                <img
                  className="d-block user-select-none m-auto"
                  width="200"
                  height="200"
                  src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                  alt="an icon"
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </Fragment>
  );
};

export default ShowWeather;
