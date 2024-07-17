const reviews = require('../models/reviews')

const getAllReviews = async(req,res) =>{
    
    const {title,index} = req.query;
    const queryObject = {};

    if(title){
        queryObject.title = title;
        console.log(queryObject.title)
    }
    if(index){
        queryObject.index = index;
        console.log(queryObject.index)
    }
    const myReviews = await reviews.find(queryObject);
    res.status(200).json({myReviews})
}

module.exports = {getAllReviews}