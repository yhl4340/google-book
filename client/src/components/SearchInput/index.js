
import React from 'react';

// input field
function SearchInput (props){
    return (
        <form>
            <div className='search' >
                <label htmlFor='search'>Search:{props.title}</label>
                <input 
                className='form-control'
                onChange={(e) => props.onChange(e)}
                type='text'
                name='search'
                id='search'/>
                <button onClick={(event) => props.onClick(event)}>Search</button>
            </div>
        </form>
    )
};
export default SearchInput;
