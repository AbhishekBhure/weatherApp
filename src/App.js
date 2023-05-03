import React, { useState } from "react";
function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState([]);

  const fetchMe = () => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c0bbf10e46msh199e55dfc7b811fp101109jsn7be17195c12e",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        const result = response.json();
        console.log(result);
        return result;
      })
      .then((result) => {
        setWeather(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="container">
      <div className="container py-5">
        <h1 className="text-center">Weather Report for {cityName}</h1>
        <form className="d-flex" htmlFor="">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for cities"
            value={cityName}
            onChange={handleChange}
          />
          <button onClick={fetchMe} type="button" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <p className="text-center">{`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`}</p>

      <div className="container d-flex m-auto justify-content-center">
        <div className="card text-center mb-3 mx-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              Cloud PCT:{" "}
              <span className="badge bg-primary">{weather.cloud_pct}</span>
            </h5>
            <h5>
              Temprature:{" "}
              <span className="badge bg-primary">{weather.temp}</span>{" "}
            </h5>
            <h5>
              Feels Like:{" "}
              <span className="badge bg-primary">{weather.feels_like}</span>{" "}
            </h5>
            <h5>
              Humidity:{" "}
              <span className="badge bg-primary">{weather.humidity}</span>{" "}
            </h5>
            <h5>
              Minimum Temprature:{" "}
              <span className="badge bg-primary">{weather.min_temp}</span>
            </h5>
          </div>
        </div>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5>
              Maximum Temprature:{" "}
              <span className="badge bg-primary">{weather.max_temp}</span>
            </h5>
            <h5>
              Wind Speed:{" "}
              <span className="badge bg-primary">{weather.wind_speed}</span>{" "}
            </h5>
            <h5>
              Wind Degrees:{" "}
              <span className="badge bg-primary">{weather.wind_degrees}</span>
            </h5>
            <h5>
              Sunrise:{" "}
              <span className="badge bg-primary">{weather.sunrise}</span>
            </h5>
            <h5>
              Sunset: <span className="badge bg-primary">{weather.sunset}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// https://open-weather13.p.rapidapi.com/city/${cityName}
