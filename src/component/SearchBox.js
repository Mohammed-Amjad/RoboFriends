import React from 'react';

const SearchBox = ({onsearchChange}) => {
    return (
        <div className='pa2'>
            <input 
            type='search'
            placeholder='search robots'
            className='pa3 ba b--green bg-lightest-blue'
            onChange={onsearchChange}/>
        </div>
    );
}

export default SearchBox;