const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.mongo_URI, () => {
  console.log('connected to mongo db')
})
const eventSchema = mongoose.Schema({
  name: String,
  decription: Number,
  start_time: String,
  end_time: String,
  date: Date,
})
const Event = mongoose.model('Event', eventSchema)

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
//app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('/events', async (req, res) => {
  const events = await Event.find()
  res.json({
    events: events
  })
})

app.post('/events', async (req ,res) => {
  const {eventname, description, start, end} = req.body
  await Event.create({
    name: eventname,
    decription: description,
    start_time: start,
    end_time: end,
    date: new Date(),
  })
  res.send('success')
})

app.get('/add', async (req, res) => {
  const events = await Event.find()
  res.json({
    events: events
  })
})


  // app.get('*', (req,res) => {
  //     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  // });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });