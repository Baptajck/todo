import { createContext, useReducer } from "react";
import { GET_WEATHER } from "../types/weather";

const initialState = {
  weather: {},
  apiKey: "f1feb914336310d05e871b3de9fef93f",
  city: "Lille",
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_WEATHER: {
      const weather = action.payload;
      return {
        ...state,
        weather,
      };
    }

    default:
      return state;
  }
};

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
