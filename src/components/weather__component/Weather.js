import React, { useEffect } from "react";
import "./Weather.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Weather({ weather }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`;
  };

  const time = (t) => {
    const hour = t.getHours();
    let minute = t.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    } else {
      minute = minute;
    }

    return ` ${hour}: ${minute}`;
  };

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="date" data-aos="fade-down-left">
            <li>{dateBuilder(new Date())}</li>
            <li className="time">{time(new Date())}</li>
          </div>
          <div className="col-6 cloud">
            {typeof weather.main != "undefined" ? (
              <span>{weather?.main?.temp}°c</span>
            ) : (
              ""
            )}
            {typeof weather.main != "undefined" ? (
              <p>{weather?.weather[0]?.main}</p>
            ) : (
              ""
            )}
          </div>

          {typeof weather.main != "undefined" ? (
            <div className="col-6 cloud" data-aos="fade-down-right">
              <img
                className="pic"
                src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}
                alt="weather icon"
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {typeof weather?.main != "undefined" ? (
          <div className="location" data-aos="fade-down">
            <h3>
              {weather?.name},{weather?.sys?.country}
            </h3>
          </div>
        ) : (
          ""
        )}

        <div className="text">
          <h5>weather Details</h5>
        </div>
        <div className="container ">
          <div className="row ">
            {typeof weather.main != "undefined" ? (
              <div>
                <div className="col-6 info-container" data-aos="fade-left">
                  <img className="icons " src="/icons/humidity.svg" alt="" />
                  <span className="label" data-aos="fade-left">
                    {weather?.main?.humidity}
                  </span>
                  Humility
                </div>
                <div className="col-6 info-container ">
                  <img className="icon" src="/icons/pressure.svg" alt="" />
                  <span className="label">{weather?.main?.pressure}</span>{" "}
                  Pressure
                </div>
                <div className="col-6 info-container ">
                  <img className="icons" src="/icons/wind.svg" alt="" />
                  <span className="label">{weather?.wind?.speed}</span> Wind
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
