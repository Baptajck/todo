import WeatherComponent from "./Weather/WeatherComponent";
import { useState, Fragment } from "react";
import { WeatherProvider } from "../context/weather";
import Modal from "./Weather/Modal";

const HomeComponent = () => {
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const showModal = () => {
    setmodalIsVisible(!modalIsVisible);
  };

  return (
    <Fragment>
      <div className="container card mb-3 p-1 cardWeather">
        <WeatherProvider>
          <WeatherComponent />
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#locModal"
            onClick={showModal}
          >
            Change Location
          </button>
        </WeatherProvider>
      </div>
      <Modal visible={modalIsVisible} setIsVisible={showModal} />
    </Fragment>
  );
};

export default HomeComponent;
