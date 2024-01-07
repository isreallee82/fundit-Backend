const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// require database connection
const dbConnect = require('./db/dbConnect');
const auth = require('./auth');
const router = require('./routes/index');

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

app.use('/', router);

app.get('/', (request, response, next) => {
  response.json({ message: 'Hey! This is your server response!' });
  next();
});

// connect database
dbConnect();

// free endpoint
app.get('/free-endpoint', (req, res) => {
  res.json({ message: 'You are free to access me anytime' });
});

// authentication endpoint
app.get('/auth-endpoint', auth, (req, res) => {
  res.json({ message: 'You are authorized to access me' });
});

module.exports = app;
