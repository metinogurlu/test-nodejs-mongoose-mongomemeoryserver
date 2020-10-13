const mongoose = require('mongoose');
require('dotenv').config();

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      dbName: process.env.DBNAME,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err);
  }

  mongoose.connection.on('error', (err) => {
    console.error('DB connection error', err);
  });
};
