// import react from "react";
import "./new.css";

// const AddEvent = () => {
//     const submitHandler = () => {
//       // method="POST" action="/events"
//     }

//     return (
//         <main>
//           <h1>Add a New Event</h1>
//           <form onSubmit={submitHandler}>
//             <div className="form-group">
//               <label htmlFor="name">Event Name</label>
//               <input className="form-control" id="name" name="name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <input className="form-control" id="description" name="description" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="start">Start Time</label>
//               <input className="form-control" id="start" name="start" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="end">End Time</label>
//               <input className="form-control" id="end" name="end" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="date">Date</label>
//               <input className="form-control" id="date" name="date" required />
//             </div>
//             <input className="btn btn-primary" type="submit" value="Add Event" />
//         </form>
  
//         </main>
//     )
//   }
  
//   export default AddEvent

import axios from "axios";
import React, { useState } from "react";
export default function AddEvent({setCurrentLink}) {

  const [events, setEvent] = useState({
    eventname: "",
    description: "",
    start: "",
    end: "",
  });

  const { eventname, description, start, end, date } = events;

  const onInputChange = (e) => {
    setEvent({ ...events, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/events", events);
    setCurrentLink("Homepage")
  };

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="header">Add Event</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="name">
              <label htmlFor="Eventname" className="form-label">
                Event Name:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Event Name"
                name="eventname"
                value={eventname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="description">
              <label htmlFor="Description" className="form-label">
                Description:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Brief Description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="start">
              <label htmlFor="Start" className="form-label">
                Start Time:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Start Time"
                name="start"
                value={start}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="end">
              <label htmlFor="End" className="form-label">
                End Time:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter End Time"
                name="end"
                value={end}
                onChange={(e) => onInputChange(e)}
              />
              </div>
              <div className="start">
              <label htmlFor="Date" className="form-label">
                Date:
              </label>
              <input
                type={"Date"}
                className="form-control"
                placeholder="Enter Date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}