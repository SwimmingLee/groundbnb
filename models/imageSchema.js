var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var ImageSchema = new mongoose.Schema({
    fileUrl: {type:String }
})


module.exports = mongoose.model('image', ImageSchema);
