const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image: {
        type:Object,
        required:true,
    },
    title: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    index: {
        type:Number,
        required:true,
    },
})

module.exports = mongoose.model('CarouselSlides', productSchema);
