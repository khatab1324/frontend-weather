import React, { Component } from "react";
import CountryForm from "./components/forms/CountryForm";
import Weather from "./components/Weather";
import "./css/main.css";
import Navbar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JordanLandmarksPage from "./components/Jordan";
import Footer from "./components/Footer";
import ProfilePage from "./components/forms/authComp/ProfilePage";
import SignInForm from "./components/forms/authComp/SignInForm";
import SignUpForm from "./components/forms/SignUpForm";

const API_KEY = "363aafc6b3534162b1305328242902";

class App extends Component {
  state = {
    temp: "",
    conditionImg: "",
    day: "",
    date: "",
    condition: "",
    city: "",
    country: "",
    conditionImgOne: "",
    tempOne: "",
    dateOne: "",
    dayOne: "",
    conditionImgTwo: "",
    tempTwo: "",
    dateTwo: "",
    dayTwo: "",
    conditionImgThree: "",
    tempThree: "",
    dateThree: "",
    dayThree: "",
    conditionImgFour: "",
    tempFour: "",
    dateFour: "",
    dayFour: "",
    conditionImgFive: "",
    tempFive: "",
    dateFive: "",
    dayFive: "",
    sunrise: "",
    sunset: "",
    wind_kph: "",
    temp_f: "",
    humidity: "",
    pressure: "",
    visibility: "",
    feelslike: "",
    hour1: "",
    hourImg1: "",
    hour2: "",
    hourImg2: "",
    hour3: "",
    hourImg3: "",
    hour4: "",
    hourImg4: "",
    hour5: "",
    hourImg5: "",
    hour6: "",
    hourImg6: "",
    error: "",
  };
  getWeekdayFromDate = (dateString) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayOfWeek = weekday[date.getDay()];
    return dayOfWeek;
  };

  getWeather = async (city = "amman", country = "jordan") => {
    try {
      const api = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city},${country}&days=6`
      );
      if (!api.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await api.json();
      if (city && country) {
        this.setState({
          temp: parseInt(data.current.temp_c),
          conditionImg: data.current.condition.icon,
          day: this.getWeekdayFromDate(data.forecast.forecastday[0].date),
          date: data.forecast.forecastday[0].date,
          condition: data.current.condition.text,
          city: city,
          country: country,
          conditionImgOne: data.forecast.forecastday[1].day.condition.icon,
          tempOne: parseInt(data.forecast.forecastday[1].day.avgtemp_c),
          dateOne: data.forecast.forecastday[1].date,
          dayOne: this.getWeekdayFromDate(data.forecast.forecastday[1].date),
          conditionImgTwo: data.forecast.forecastday[2].day.condition.icon,
          tempTwo: parseInt(data.forecast.forecastday[2].day.avgtemp_c),
          dateTwo: data.forecast.forecastday[2].date,
          dayTwo: this.getWeekdayFromDate(data.forecast.forecastday[2].date),
          conditionImgThree: data.forecast.forecastday[3].day.condition.icon,
          tempThree: parseInt(data.forecast.forecastday[3].day.avgtemp_c),
          dateThree: data.forecast.forecastday[3].date,
          dayThree: this.getWeekdayFromDate(data.forecast.forecastday[3].date),
          conditionImgFour: data.forecast.forecastday[4].day.condition.icon,
          tempFour: parseInt(data.forecast.forecastday[4].day.avgtemp_c),
          dateFour: data.forecast.forecastday[4].date,
          dayFour: this.getWeekdayFromDate(data.forecast.forecastday[4].date),
          conditionImgFive: data.forecast.forecastday[5].day.condition.icon,
          tempFive: parseInt(data.forecast.forecastday[5].day.avgtemp_c),
          dateFive: data.forecast.forecastday[5].date,
          dayFive: this.getWeekdayFromDate(data.forecast.forecastday[5].date),
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          wind_kph: data.current.wind_kph,
          temp_f: parseInt(data.current.temp_f),
          humidity: data.current.humidity,
          pressure: data.current.pressure_mb,
          visibility: data.current.vis_km,
          feelslike: parseInt(data.current.feelslike_c),
          hour1: parseInt(data.forecast.forecastday[0].hour[0].temp_c),
          hourImg1: data.forecast.forecastday[0].hour[0].condition.icon,
          hour2: parseInt(data.forecast.forecastday[0].hour[4].temp_c),
          hourImg2: data.forecast.forecastday[0].hour[4].condition.icon,
          hour3: parseInt(data.forecast.forecastday[0].hour[8].temp_c),
          hourImg3: data.forecast.forecastday[0].hour[8].condition.icon,
          hour4: parseInt(data.forecast.forecastday[0].hour[12].temp_c),
          hourImg4: data.forecast.forecastday[0].hour[12].condition.icon,
          hour5: parseInt(data.forecast.forecastday[0].hour[16].temp_c),
          hourImg5: data.forecast.forecastday[0].hour[16].condition.icon,
          hour6: parseInt(data.forecast.forecastday[0].hour[20].temp_c),
          hourImg6: data.forecast.forecastday[0].hour[20].condition.icon,
          error: "",
        });
      } else {
        this.setState({
          temp: "",
          conditionImg: "",
          date: "",
          condition: "",
          city: "",
          country: "",
          conditionImgOne: "",
          tempOne: "",
          dateOne: "",
          dayOne: "",
          conditionImgTwo: "",
          tempTwo: "",
          dateTwo: "",
          dayTwo: "",
          conditionImgThree: "",
          tempThree: "",
          dateThree: "",
          dayThree: "",
          conditionImgFour: "",
          tempFour: "",
          dateFour: "",
          dayFour: "",
          conditionImgFive: "",
          tempFive: "",
          dateFive: "",
          dayFive: "",
          sunrise: "",
          sunset: "",
          wind_kph: "",
          temp_f: "",
          humidity: "",
          pressure: "",
          visibility: "",
          feelslike: "",
          hour1: "",
          hourImg1: "",
          hour2: "",
          hourImg2: "",
          hour3: "",
          hourImg3: "",
          hour4: "",
          hourImg4: "",
          hour5: "",
          hourImg5: "",
          hour6: "",
          hourImg6: "",
          error: "Please enter both city and country",
        });
      }
    } catch (error) {
      this.setState({
        temp: "",
        conditionImg: "",
        date: "",
        condition: "",
        city: "",
        country: "",
        conditionImgOne: "",
        tempOne: "",
        dateOne: "",
        dayOne: "",
        conditionImgTwo: "",
        tempTwo: "",
        dateTwo: "",
        dayTwo: "",
        conditionImgThree: "",
        tempThree: "",
        dateThree: "",
        dayThree: "",
        conditionImgFour: "",
        tempFour: "",
        dateFour: "",
        dayFour: "",
        conditionImgFive: "",
        tempFive: "",
        dateFive: "",
        dayFive: "",
        sunrise: "",
        sunset: "",
        wind_kph: "",
        temp_f: "",
        humidity: "",
        pressure: "",
        visibility: "",
        feelslike: "",
        hour1: "",
        hourImg1: "",
        hour2: "",
        hourImg2: "",
        hour3: "",
        hourImg3: "",
        hour4: "",
        hourImg4: "",
        hour5: "",
        hourImg5: "",
        hour6: "",
        hourImg6: "",
        error: "Error fetching weather data. Please try again later.",
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<CountryForm getWeather={this.getWeather} />}
            />
          </Routes>
          <Routes>
            <Route path="/signin" element={<SignInForm />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <Weather
                  temp={this.state.temp}
                  conditionImg={this.state.conditionImg}
                  day={this.state.day}
                  date={this.state.date}
                  condition={this.state.condition}
                  city={this.state.city}
                  country={this.state.country}
                  conditionImgOne={this.state.conditionImgOne}
                  tempOne={this.state.tempOne}
                  dateOne={this.state.dateOne}
                  dayOne={this.state.dayOne}
                  conditionImgTwo={this.state.conditionImgTwo}
                  tempTwo={this.state.tempTwo}
                  dateTwo={this.state.dateTwo}
                  dayTwo={this.state.dayTwo}
                  conditionImgThree={this.state.conditionImgThree}
                  tempThree={this.state.tempThree}
                  dateThree={this.state.dateThree}
                  dayThree={this.state.dayThree}
                  conditionImgFour={this.state.conditionImgFour}
                  tempFour={this.state.tempFour}
                  dateFour={this.state.dateFour}
                  dayFour={this.state.dayFour}
                  conditionImgFive={this.state.conditionImgFive}
                  tempFive={this.state.tempFive}
                  dateFive={this.state.dateFive}
                  dayFive={this.state.dayFive}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  wind_kph={this.state.wind_kph}
                  temp_f={this.state.temp_f}
                  humidity={this.state.humidity}
                  pressure={this.state.pressure}
                  visibility={this.state.visibility}
                  feelslike={this.state.feelslike}
                  hour1={this.state.hour1}
                  hourImg1={this.state.hourImg1}
                  hour2={this.state.hour2}
                  hourImg2={this.state.hourImg2}
                  hour3={this.state.hour3}
                  hourImg3={this.state.hourImg3}
                  hour4={this.state.hour4}
                  hourImg4={this.state.hourImg4}
                  hour5={this.state.hour5}
                  hourImg5={this.state.hourImg5}
                  hour6={this.state.hour6}
                  hourImg6={this.state.hourImg6}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/components/Jordan"
              element={<JordanLandmarksPage />}
            />
          </Routes>
          <Routes>
            <Route
              path="/components/forms/ProfilePage"
              element={<ProfilePage />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
