import React, { useState } from "react";
import City from "./components/city_component/City";
import Weather from "./components/weather__component/Weather";
import "./App.css";
import Error_message from "./components/city_component/Error_message";
const api = {
  key: "f1c0d8a36ffc4e8596b2116ae4f36e8d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [errorOccured, setErrorOccured] = useState(false);

  const search = async (e) => {
    e.preventDefault();
    try {
      setErrorOccured(false);
      await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.cod != "404") {
            setWeather(result);
            setQuery("");
          } else {
            setErrorOccured(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cont w-50">
      <h3>
        <span className="swift">team swift</span> weather app
      </h3>
      <City
        setQuery={setQuery}
        search={search}
        query={query}
        setErrorOccured={setErrorOccured}
      />
      {errorOccured ? <Error_message /> : <Weather weather={weather} />}
    </div>
  );
}

export default App;
