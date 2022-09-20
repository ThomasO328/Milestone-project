import { useState, useEffect } from 'react';
// import logo from "./logo.svg";
import './App.css';
import axios from 'axios';
import React from 'react';
import Data from './data/EventData';
import Search from './components/Search';

function App() {
  const [data, setData] = useState(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    axios.get('/events').then((response) => {
      console.log(response);
      setData(response.data.events);
    });
  }, [likes]);

  const incrementLike = (name) => {
    axios
      .post('/like', {
        name,
      })
      .then((response) => {
        setLikes(response.data.likes);
      });
  };

  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      {data?.map(({ _id, name, likes, duration, date }) => (
        <div>
          <div>{name}</div>
          <div>
            {likes} <button onClick={() => incrementLike(name)}>Like</button>
          </div>
          <div>{duration}</div>
          <div>{date}</div>
        </div>
      ))}
      <Search details={Data} />
    </div>
  );
}

export default App;
