var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var ShareHouseSchema = new mongoose.Schema({
    image: [String],
    schedule: [{type:mongoose.Schema.Types.ObjectId, ref:'schedule'}],
    price: {type: Number, required: true},
    personCapa: {type: Number, required: true},
    title: String,
    description: {type: String, required: true},
    rule: [String],
    host: mongoose.Schema.Types.ObjectId,
    facilities: {
        roomCnt: Number,
        bathCnt: Number,
        bedCnt: Number,
        kitchenCnt: Number,
        etc: [String]
    },
    location: {
        latitude: Number,
        longitude: Number,
        address: String
    },
    comment: {
        userRating: {type: Number, default:0.0},
        reviewCnt: {type:Number, default:0},
        review:{type:mongoose.Schema.Types.ObjectId, ref:'review'}
    },
})
9

module.exports = mongoose.model('sharehouse', ShareHouseSchema);
