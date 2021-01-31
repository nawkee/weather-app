import React from 'react';

const Header = ({ cityName, cityCountry }) => {
    return (
        <div className='Header'>
            <h2>{cityName}, {cityCountry}</h2>
        </div>
    );
};

export default Header;
