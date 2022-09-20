import React, {useState} from 'react';

function new_form() {
    return (
      <Def>
        <main>
          <h1>Add a New Event</h1>
          <form method="POST" action="/events">
            <div className="form-group">
              <label htmlFor="name">Event Name</label>
              <input className="form-control" id="name" name="name" required />
            </div>
          </form>
          <div className="form-group">
              <label htmlFor="name">Event Name</label>
              <input className="form-control" id="name" name="name" required />
            </div>
  
        </main>
      </Def>
    )
  }
  