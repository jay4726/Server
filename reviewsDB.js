const connectDB = require('./db/connect');
const review = require("./models/reviews");

const ProductJson = require('./reviews.json'); 

const start1 = async () => {
    try {
        await connectDB();  
        await review.deleteMany();  
        await review.create(ProductJson); 
        console.log("Success: Database populated with default reviews.");
    } catch (error) {
        console.error('Error during database seeding:', error);
    }
}

start1();
