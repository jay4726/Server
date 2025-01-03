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

const addReview = async (req, res) => {
    try {
        const { name, reviews: desc, country, rate } = req.body;

        if (!name || !desc || !country || !rate) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newReview = new reviews({
            name,
            desc,
            country,
            rate,
            id: Date.now(),
        });

        await newReview.save();
        
        res.status(201).json(newReview); // Send the new review as response
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

app.delete('/api/reviews/:id', async (req, res) => {
    try {
      const reviewId = req.params.id;
  
      // Delete the review from the database
      const deletedReview = await Review.findByIdAndDelete(reviewId);
  
      if (!deletedReview) {
        return res.status(404).json({ message: 'Review not found' });
      }
  
      res.status(200).json({ message: 'Review deleted successfully', data: deletedReview });
    } catch (error) {
      console.error('Error deleting review:', error);
      res.status(500).json({ message: 'Error deleting review' });
    }
  });

module.exports = {getAllReviews, addReview}

