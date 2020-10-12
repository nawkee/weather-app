import React from 'react';

const Header = ({ cityName, cityCountry, date }) => {
    return (
        <div className='Header'>
            <h2>{cityName}, {cityCountry}</h2>
            <h3>{date}</h3>
        </div>
    );
};

export default Header;
