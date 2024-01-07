// external imports
const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL || 'mongodb://127.0.0.1/27017', {
      //   these are options to ensure that the connection is done properly
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
      console.log('Unable to connect to MongoDB Atlas!');
      console.error(error);
    });
}

module.exports = dbConnect;
