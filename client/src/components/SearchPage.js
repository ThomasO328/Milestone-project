import React from 'react'
import Search from './Search'
import Data from '../data/EventData'
import axios from "axios";

const getData = async() => {
    try{
        const response = await axios.get()
    }
}

function SearchPage() {
    return(
        <div className="tc bg-white ma0 pa4 min-vh-100">
            <Search details={Data}/>
        </div>
    )
}

export default SearchPage;