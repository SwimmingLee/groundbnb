var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var ReviewSchema = new mongoose.Schema({
    sharehouse_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    content: String,
    updateTime: {type:Date, default:Date.now},
    userRating: Number,
    comment: [
        {
            content: String,
            publisher: String,
            updateTime: Date
        },
    ]
})


module.exports = mongoose.model('review', ReviewSchema);
