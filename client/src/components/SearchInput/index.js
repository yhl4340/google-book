
import React from 'react';

// input field
function SearchInput (props){
    return (
        <form>
            <div className='search' >
                <label htmlFor='search'>Search:</label>
                <input 
                className='form-control'
                onChange={props.handleInputChange}
                type='text'
                name='search'
                id='search'/>
                <button onClick={(event) => props.handleFormSubmit(event)}>Search</button>
            </div>
        </form>
    )
};
export default SearchInput;
