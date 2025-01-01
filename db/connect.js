const mongoose = require('mongoose');

const uri = "mongodb+srv://jay0326:Asdfgbnm%4012@bingewatchapi.cfoxxgi.mongodb.net/BingeWatchAPI?retryWrites=true&w=majority&appName=BingeWatchAPI";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); 
    }
};

module.exports = connectDB;
