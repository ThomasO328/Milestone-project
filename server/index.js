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
  likes: Number,
  duration: String,
  date: String,
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

  // app.get('*', (req,res) => {
  //     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  // });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });