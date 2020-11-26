import React from 'react';
import './Search.css';

const Search = (props) => {
    const {searchTaskNameField, searchTask} = props;
    return (
        <div className="Search">
            <input onChange={searchTaskNameField} placeholder="Search task..."/>
            <button onClick={searchTask}>Search</button>
        </div>
    );
}

export default Search;