const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {})
  .then(() => {
    console.log(`Connected to Database successfully...`);
  })
  .catch((err) => {
    console.log(`No Connection` + err);
  });
