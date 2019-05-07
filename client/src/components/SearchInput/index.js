
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
                <button  className="btn btn-primary mt-3" onClick={props.handleFormSubmit}>Search</button>
            </div>
        </form>
    )
};
export default SearchInput;
