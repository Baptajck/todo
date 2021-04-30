import axios from "axios";
const getWeather = async (city, apiKey) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

  // Il faut gérer les erreurs ici

  const res = await axios.get(url);
  if (res.status === 200) {
    return await res.data;
  }
};

export { getWeather };
