import React from 'react'
import {useState} from 'react'

function Search({onSearch}) {


const [currentSearch, setCurrentSearch] = useState('')

function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch)
    setCurrentSearch('')
}

    return(
        <form className="searchBar" onSubmit={handleSubmit}>
            <input
            type='text'
            id='search'
            placeholder='search a location '
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}></input>
            <button type="submit">🔍</button>
        </form>
    )
}

export default Search