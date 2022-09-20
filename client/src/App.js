import { useState, useEffect } from 'react';
// import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import React from 'react';
import Data from './data/EventData'
import Search from './components/Search'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api").then((response) => {
      console.log(response);
      setData(response.data.message);
    });
  }, []);


  return (
    <div className='tc bg-green ma0 pa4 min-vh-100'>
      <Search details={Data}/>
    </div>
  );
}

export default App;