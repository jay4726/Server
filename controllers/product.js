const Product = require('../models/product')

const getAllTrailers = async(req,res) =>{
    
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
    const myData = await Product.find(queryObject);
    res.status(200).json({myData})
}

const getAllTrailersTesting = async(req,res) =>{
    const myData = await Product.find(req.query);
    console.log(req.query)
    res.status(200).json({myData})
}
module.exports = {getAllTrailers, getAllTrailersTesting}