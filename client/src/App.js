import { useState, useEffect } from 'react';
// import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import React from 'react';
import Data from './data/EventData'
import SearchPage from './components/SearchPage'
import AddEvent from "./components/new"
import Dummy1 from "./components/Dummy1"
import Dummy2 from "./components/Dummy2"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const [currentLink, setCurrentLink] = useState('Homepage')

  useEffect(() => {
    axios.get("/events").then((response) => {
      console.log(response);
      setData(response.data.events);
    });
  }, []);

  return (
    <div className='main'> 
      <ul>
        <li onClick={() => setCurrentLink('Homepage')}>Home Page</li>
        <li onClick={() => setCurrentLink('Eventpage')}>Add Events Page</li>
        <li onClick={() => setCurrentLink('Searchpage')}>Search Events</li>
      </ul>
      {
        currentLink === "Homepage" && (
        <div>
          <h4>Welcome To Our Events Page</h4> 
          <h3>The Place For All Your Favorite Events</h3> 
        </div>
        )
      }
      {
        currentLink === "Eventpage" && (
          // <AddEvent />
          <AddEvent setCurrentLink={setCurrentLink}/>
        )
      }
      {
        currentLink === "Searchpage" && (
            <SearchPage/>
        )
      }
    </div>
  );
}

export default App;