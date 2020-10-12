import React, { useState } from 'react';
import './App.css';
import Days from "./components/Days";
import Search from "./components/Search";
import Header from "./components/Header";
import Today from "./components/Today";

function App() {
  const [state, setState] = useState({value: '', data: null, error: false});

    const months = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const handleInput = (e) => {
      e.preventDefault();

        const API_KEY = '58585d88b30462316cba27ee353ef137';
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${e.target.value}&appid=${API_KEY}&units=metric`;

        fetch(url)
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              throw Error(res.statusText)
          })
          .then(data => {
              const currentDate = new Date();
              const date = `${days[currentDate.getDay()]} ${currentDate.getDate()}, ${
                  months[currentDate.getMonth()]
              }`;

              const weather = {
                  city: data.city.name,
                  date,
                  country: data.city.country,
                  description: data.list[0].weather[0].description,
                  temp: data.list[0].weather[0].main.temp,
                  highestTemp: data.list[0].weather[0].main.temp_max,
                  lowestTemp: data.list[0].weather[0].main.temp_min,
                  wind: data.list[0].wind.speed,
                  list: data.list
              };

              setState({value: weather.city, data: weather, error: false});
          })
          .catch(error => {
              console.log(error);
              setState({value: '', data: null, error: true});
          })
  };

  return (
    <div className="App">
        <Search setCity={handleInput} />
        {
            (state.data && !state.error) ?
            <>
                <Header
                    cityName={state.data.city}
                    cityCountry={state.data.country}
                    date={state.data.date}
                />
                <Today data={state.data.list[0]} />
                <Days days={state.data.list} months={months} />
            </>
            :
            <h1 style={{textAlign:'center'}}>Something went wrong.<br/>Try again</h1>
        }
    </div>
  );
}

export default App;
