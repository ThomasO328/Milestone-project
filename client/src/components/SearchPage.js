import React, {useState, useEffect} from 'react'
import Search from './Search'
import Data from '../data/EventData'
import axios from "axios";


////const { MongoClient, ServerApiVersion } = require('mongodb');
////const uri = "mongodb+srv://imsb007:qkhk_001@cluster0.yypckku.mongodb.net/?retryWrites=true&w=majority";

// const getData = async() => {
//     try{
//         const response = await axios.get('process.env.mongo_URI')
//     }
// }

function SearchPage() {

    const [EventData, setData] = useState("")

    /*const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
    const collection = client.db("test").collection("devices");
  // perform actions on the collection object
    client.close();
    });*/
    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axios.get("mongodb+srv://imsb007:qkhk_001@cluster0.yypckku.mongodb.net/test").then(response => {
        setData(response.data.EventData)
    })
    .catch(error => console.error('Error: ${error}'));

    
    return(
        <div className="tc bg-white ma0 pa4 min-vh-100">
            <Search details={EventData}/>
        </div>
    )
}}

export default SearchPage