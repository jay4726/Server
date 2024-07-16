require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const productRoutes = require('./routes/product');


app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.use('/api/product', productRoutes);

const start = async () => {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}, Connected to DB`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

start();
