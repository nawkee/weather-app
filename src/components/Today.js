import React from 'react';

const Today = ({ data }) => {
    let iconName;
    const weather = data.weather[0].main;
    if (weather === 'Thunderstorm') {
        iconName = 'fas fa-thunderstorm';
    } else if (weather === 'Drizzle') {
        iconName = 'fas fa-cloud-drizzle';
    } else if (weather === 'Rain') {
        iconName = 'fas fa-cloud-rain';
    } else if (weather === 'Snow') {
        iconName = 'fas fa-snowflake';
    } else if (weather === 'Clear') {
        iconName = 'fas fa-sun';
    } else if (weather === 'Clouds') {
        iconName = 'fas fa-cloud';
    } else {
        iconName = 'fas fa-smog';
    }

    return (
        <div className='Today'>
            <div className="left">
                <i className={iconName}></i>
                <div>
                    <h3>{data.main.temp}°C</h3>
                    <h3>{weather}</h3>
                </div>
            </div>
            <div className="right">
                <h4>
                    {data.main.temp_max}°C
                    <br/>
                    <p>Highest</p>
                </h4>
                <h4>
                    {data.main.temp_min}°C
                    <br/>
                    <p>Lowest</p>
                </h4>
                <h4>
                    {data.wind.speed}mps
                    <br/>
                    <p>Wind</p>
                </h4>
            </div>
        </div>
    );
};

export default Today;