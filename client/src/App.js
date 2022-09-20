import { useState, useEffect } from 'react';
// import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import React from 'react';
import Data from './data/EventData'
import Search from './components/Search'
import Home from './components/Home'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/events").then((response) => {
      console.log(response);
      setData(response.data.events);
    });
  }, []);


  return (
    <Home>
      <div className='tc bg-green ma0 pa4 min-vh-100'>
        <Search details={Data}/>
      </div>
    </Home>
  );
}

export default App;