require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.DB_NAME || 'temp_database';

const app = express();

const apiRoutes = require('./api-routes');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// mongodb
mongoose.connect(`mongodb://localhost/${DB_NAME}`, { 
  useCreateIndex: true,  
  useNewUrlParser: true 
});

const db = mongoose.connection;

if (!db) {
  console.log('No database connected');
} else {
  console.log('Database connected');
}

app.get('/', (req, res) => res.send('Hello there!'));
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/pages/home.html')
})

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
