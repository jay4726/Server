
const connectDB = require('./db/connect');
const review = require("./models/reviews");

const ProductJson = require('./reviews.json')

const start1 = async()=>{
    try {
        await connectDB();
        await review.deleteMany();
        await review.create(ProductJson)
        console.log("Success")
    } catch (error) {
        console.log(error)
    }
}

start1();