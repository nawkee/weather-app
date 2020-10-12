import React from 'react';

const Search = ({ setCity }) => {
    return (
        <input
            className='Search'
            type="text"
            onKeyUp={(e) => {
                e.preventDefault();
                if (e.keyCode === 13) {
                    setCity(e);
                    e.target.value = '';
                }
            }}
            placeholder='London'
        />
    );
};

export default Search;
