import React, {useState} from 'react'
import Search from './Search'
import Data from '../data/EventData'
import axios from "axios";

// const getData = async() => {
//     try{
//         const response = await axios.get('process.env.mongo_URI')
//     }
// }

function SearchPage() {

    const [EventData, setData] = useState("")

    axios.get("mongodb+srv://imsb007:qkhk_001@cluster0.yypckku.mongodb.net/test").then(response => {
        setData(response.data.EventData)
    })

    
    return(
        <div className="tc bg-white ma0 pa4 min-vh-100">
            <Search details={EventData}/>
        </div>
    )
}

export default SearchPage;