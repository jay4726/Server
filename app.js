require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const product_routs = require('./routes/product');

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.use('/api/product', product_routs);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => { // Corrected here
      console.log('Server is running on port 5000, Connected to DB');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
