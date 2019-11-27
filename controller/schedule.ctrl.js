var mongoose = require('mongoose');
var ScheduleModel = require('../models/scheduleSchema');


exports.addSchedule= function(req, res) {
    console.log('Add a new ScheduleModel ' + req.body.host);
    schedule = new ScheduleModel(req.body);
    return ScheduleModel.save( function(err, data) {
        if(err) return res.json(err);
        return res.json(data);
    })
}



exports.getScheduleById = function(req, res) {
    console.log('Get a Schedule');
    return ScheduleModel.findById(req.params.id, function(err, data){
        if(err) res.send(err);
        return res.json(data);
    })
}

exports.deleteScheduleById = function(req, res) {
    ScheduleModel.findOneAndRemove(
        {_id: req.params.id}, function(err, data) {
            if(err) return res.send(err);
            return res.json(data);
    })
}

exports.updateSchedule = function(req, res) {
    return ScheduleModel.findByIdAndUpdate(
        req.params.id, req.body, {new: true}, function(err, data){
            if (err) res.send(err);
            return res.json(data);
        }
    )
}