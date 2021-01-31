import React from 'react';

const Day = ({ data, day, month, hours, setToday }) => {
    return (
        <div className='Day' onClick={() => setToday(data.dt)}>
            <h4>{month} {day}</h4>
            <h4>{hours}:00</h4>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon"/>
            <h4>{data.main.temp}°C</h4>
        </div>
    );
};

export default Day;
