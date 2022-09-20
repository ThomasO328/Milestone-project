const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5001;
const eventSchema = mongoose.Schema({
  name: String,
  likes: Number,
  duration: String,
  date: String,
});
const Event = mongoose.model('Event', eventSchema);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(express.static(path.resolve(__dirname, '../client/build')))

console.log(process.env.mongo_URI);
console.log(process.env.data);

mongoose.connect(
  process.env.mongo_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo db');
  }
);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json({
      events: events,
    });
  } catch (e) {
    res.json({
      error: e,
    });
  }
});

app.post('/like', async (req, res) => {
  console.log(req.body.name);
  const eventName = req.body.name;
  const foundEvent = await Event.find({
    name: eventName,
  });

  res.json({ likes: foundEvent.likes });
});

// app.get('*', (req,res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
