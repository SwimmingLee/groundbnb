var mongoose = require('mongoose');
var reviewModel = require('../models/reviewSchema');


exports.addReview = function(req, res) {
    console.log('Add a new review ' + req.body.host);
    review = new ReviewModel(req.body);
    return review.save( function(err, data) {
        if(err) return res.json(err);
        return res.json(data);
    })
}

exports.getReviewById = function(req, res) {
    console.log('Get a Review');
    return ReviewModel.findById(req.params.id, function(err, data){
        if(err) res.send(err);
        return res.json(data);
    })
}

exports.deleteReviewById = function(req, res) {
    ReviewModel.findOneAndRemove(
        {_id: req.params.id}, function(err, data) {
            if(err) return res.send(err);
            return res.json(data);
    })
}

exports.updateReview = function(req, res) {
    return ReviewModel.findByIdAndUpdate(
        req.params.id, req.body, {new: true}, function(err, data){
            if (err) res.send(err);
            return res.json(data);
        }
    )
}

exports.importdummy = (req, res) => {
    try {
        const path = './dummy_review.json'
        const jsonString = fs.readFileSync(path)
        const customer = JSON.parse(jsonString)
        //console.log(customer)
        for (var idx in customer){
            console.log(customer[idx]);
            review = new ReviewModel(customer[idx]);
            review.save( function(err, data) {
                if(err) return res.json(err);
            })
        }
      } catch(err) {
        console.log(err)
        return res.json(err);
      }
}