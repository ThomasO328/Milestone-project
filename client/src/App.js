import { useState, useEffect } from 'react';
// import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import React from 'react';
import Data from './data/EventData'
import Search from './components/Search'
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

//   useEffect
//   axios.post('/', (req, res) => {
//     if (req.body.pic === '') { req.body.pic = undefined }
//     if (req.body.city === '') { req.body.city = undefined }
//     if (req.body.state === '') { req.body.state = undefined }
//     db.Event.create(req.body)
//         .then(() => {
//             res.redirect('/events')
//         })
//         .catch(err => {
//             if (err && err.name == 'ValidationError') {
//                 let message = 'Validation Error: '
//                 for (var field in err.errors) {
//                     message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`
//                 }
//                 res.render('events/new', { message })
//             }
//             else {
//                 res.render('error404')
//             }
//         })
// })


  return (
    <div> 
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
          <AddEvent />
        )
      }
      {
        currentLink === "Searchpage" && (
            <Search details={Data}/>
          
        )
      }
    </div>
  );
}

export default App;