import React, { useState, useEffect } from 'react';
import './App.css';
import Days from "./components/Days";
import Search from "./components/Search";
import Header from "./components/Header";
import Today from "./components/Today";

const App = () => {
    const [state, setState] = useState({ value: '', data: null, error: false });

    const months = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const handleInput = (value) => {
        const API_KEY = '58585d88b30462316cba27ee353ef137';
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${value ? value : 'London'}&appid=${API_KEY}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const currentDate = new Date();
                const dateString = `${days[currentDate.getDay()]} ${currentDate.getDate()}, ${
                    months[currentDate.getMonth()]
                }`;

                const weather = {
                    today: data.list[0],
                    city: data.city.name,
                    dateString,
                    country: data.city.country,
                    description: data.list[0].weather[0].description,
                    temp: data.list[0].weather[0].main.temp,
                    highestTemp: data.list[0].weather[0].main.temp_max,
                    lowestTemp: data.list[0].weather[0].main.temp_min,
                    wind: data.list[0].wind.speed,
                    list: data.list
                };

                setState({ value: weather.city, data: weather, error: false });
            })
            .catch(error => {
                console.log(error);
                setState({ ...state, error: true});
            })
    };

    const filterEveryNthElement = (array, n) => {
        return array.filter((element, i) => i % n === n - 1);
    }

    useEffect(handleInput, []);

    const setToday = (dt) => {
        const newToday = state.data.list.find(element => element.dt === dt);
        setState({ ...state, data: {...state.data, today: newToday } });
    }

    return (
        <div className="App">
            <Search setCity={(e) => {
                e.preventDefault();
                handleInput(e.target.value);
            }} />
            {
                (!state.error && state.data) ?
                    <>
                        <Header
                            cityName={state.data.city}
                            cityCountry={state.data.country}
                        />
                        <Today data={state.data.today} />
                        <Days days={filterEveryNthElement(state.data.list, 4)} months={months} setToday={setToday}/>
                    </>
                    :
                    <h1 style={{textAlign:'center'}}>Something went wrong.<br/>Try again</h1>
            }
        </div>
    );
}

export default App;
