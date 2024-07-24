const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env' });

require('./db/conn');

// PORT Assigning
const PORT = process.env.PORT;

//  Middleware
middleware = (req, res, next) => {
  console.log('Hello from middleware');
  next();
};

app.get('/', (req, res) => {
  res.send('Welcome to home page from SERVER...');
});
app.get('/about', middleware, (req, res) => {
  res.send('Welcome to about page from SERVER...');
});
app.get('/contact', (req, res) => {
  res.send('Welcome to contact page from SERVER...');
});
app.get('/signin', (req, res) => {
  res.send('Welcome to signin page from SERVER...');
});
app.get('/signup', (req, res) => {
  res.send('Welcome to signup page from SERVER...');
});

app.listen(5000, () => {
  console.log(`Server is running on port number ${PORT}`);
});
