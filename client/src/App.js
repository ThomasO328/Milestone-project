import { useState, useEffect } from 'react';
// import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import React from 'react';
import Data from './data/EventData'
import Search from './components/Search'
import Home from './components/Home'
// import AddEvent from './components/new';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

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
    <Home>
      <div className='tc bg-green ma0 pa4 min-vh-100'>
        <Search details={Data}/>
      </div>
    </Home>
  );
}

export default App;