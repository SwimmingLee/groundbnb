var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var ScheduleSchema = new mongoose.Schema({
    sharehouse_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    booked: {
        startTime: Date,
        endTime: Date
    }
})


module.exports = mongoose.model('schedule', ScheduleSchema);
