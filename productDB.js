const connectDB = require('./db/connect');
const product = require("./models/product");

const ProductJson = require('./products.json')

const start = async()=>{
    try {
        await connectDB();
        await product.deleteMany();
        await product.create(ProductJson)
        console.log("Success")
    } catch (error) {
        console.log(error)
    }
}

start();