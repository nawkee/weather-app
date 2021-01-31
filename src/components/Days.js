import React from 'react';
import Day from './Day';

const Days = ({ days, months, setToday }) => {
    return (
        <div className='Days'>
            {
                days.map(day =>
                    <Day
                        key={day.dt}
                        data={day}
                        day={(new Date(day.dt*1000)).getUTCDate()}
                        month={months[(new Date(day.dt*1000)).getUTCMonth()]}
                        hours={(new Date(day.dt*1000)).getUTCHours()}
                        setToday={setToday}
                    />)
            }
        </div>
    );
};

export default Days;
