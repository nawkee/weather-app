import React from 'react';

const decideOnIconName = (weather) => {
    switch (weather) {
        case 'Thunderstorm':
            return 'fas fa-thunderstorm';
        case 'Drizzle':
            return 'fas fa-cloud-drizzle';
        case 'Rain':
            return 'fas fa-cloud-rain';
        case 'Snow':
            return 'fas fa-snowflake';
        case 'Clear':
            return 'fas fa-sun';
        case 'Clouds':
            return 'fas fa-cloud';
        default:
            return 'fas fa-smog';
    }
}

const Today = ({ data }) => {
    const weather = data.weather[0].main;
    const iconClassName = decideOnIconName(weather);

    return (
        <div className='Today'>
            <div className="left">
                <i className={iconClassName}></i>
                <div>
                    <h3 style={{fontSize: '1rem'}}>{data.dt_txt}</h3>
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