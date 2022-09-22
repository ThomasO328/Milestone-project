import react from "react" 

const AddEvent = () => {
    return (
        <main>
          <h1>Add a New Event</h1>
          <form method="POST" action="/events">
            <div className="form-group">
              <label htmlFor="name">Event Name</label>
              <input className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="pic">Event Picture</label>
              <input className="form-control" id="pic" name="pic" required />
            </div>
            <div className="form-group">
              <label htmlFor="start">Start Time</label>
              <input className="form-control" id="start" name="start" required />
            </div>
            <div className="form-group">
              <label htmlFor="end">End Time</label>
              <input className="form-control" id="end" name="end" required />
            </div>
            <input className="btn btn-primary" type="submit" value="Add Event" />
        </form>
  
        </main>
    )
  }
  
  export default AddEvent

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function AddEvent() {
//   let navigate = useNavigate();

//   const [events, setEvent] = useState({
//     eventname: "",
//     description: "",
//     start: "",
//     end: "",
//   });

//   const { eventname, description, start, end } = events;

//   const onInputChange = (e) => {
//     setEvent({ ...events, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("/events", events);
//     navigate("/");
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Add Event</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="Eventname" className="form-label">
//                 Event Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter Event Name"
//                 name="eventname"
//                 value={eventname}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Description" className="form-label">
//                 Description
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter Brief Description"
//                 name="Description"
//                 value={description}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Start" className="form-label">
//                 Start Time
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter Start Time"
//                 name="start"
//                 value={start}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="End" className="form-label">
//                 End Time
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter End Time"
//                 name="end"
//                 value={end}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }