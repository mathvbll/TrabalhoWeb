import React, { useState } from 'react'
import { Axios } from 'axios'

import SearchBox from './SearchBox'
import SearchResultList from './SearchResultList'

import "./Home.css"

function Home ()
{
    const [results, setResults] = useState([])


    return (
        <div className='Home'>
        <div className='search-bar-container'>
            <SearchBox setResults = {setResults}/>
            <SearchResultList results = {results}/>
        </div>
        </div>
    )
}

export default Home