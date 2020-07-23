require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

const apiRoutes = require('./api-routes');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// mongodb
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

const db = mongoose.connection;

if (!db) {
  console.log('no db connected');
} else {
  console.log('Db connected');
}

// app.get('/', (req, res) => res.send('Hello there!'));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
