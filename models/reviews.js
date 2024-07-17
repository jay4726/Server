const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rate: {
        type:Number,
        required:true,
    },
    name: {
        type:String,
        required:true,
    },
    desc: {
        type:String,
        required:true,
    },
    country: {
        type:String,
        required:true,
    },
    id: {
        type:Number,
        required:true,
    },
})

module.exports = mongoose.model('Reviews', reviewSchema);
