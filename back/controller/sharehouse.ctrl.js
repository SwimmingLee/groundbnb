var mongoose = require('mongoose');
var SharehouseModel = require('../models/sharehouseSchema');
var fs = require('fs');
//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.addSharehouse = function(req, res) {
    console.log('Add a new sharehouse ' + req.body.host);
    sharehouse = new SharehouseModel(req.body);
    return sharehouse.save( function(err, data) {
        if(err) return res.json(err);
        return res.json(data);
    })
}

exports.getSharehouseById = function(req, res) {
    console.log('Get a sharehouse', req.params.houseId);
    return SharehouseModel.findById(req.params.houseId, function(err, data){
        if(err) res.send(err);
        return res.json(data);
    })
}

exports.getAllSharehouse = function(req, res) {
    return SharehouseModel.find(function(err, user) {
        if(err) return res.send(err);
        return res.send(user);
    })
}
exports.deleteSharehouseById = function(req, res) {
    SharehouseModel.findOneAndRemove(
        {_id: req.params.id}, function(err, data) {
            if(err) return res.send(err);
            return res.json(data);
    })
}

exports.updateSharehouse = function(req, res) {
    return SharehouseModel.findByIdAndUpdate(
        req.params.id, req.body, {new: true}, function(err, data){
            if (err) res.send(err);
            return res.json(data);
        }
    )
}

exports.importdummy = (req, res) => {
    try {
        const path = './dummy_sharehouse.json'
        const jsonString = fs.readFileSync(path)
        const customer = JSON.parse(jsonString)
        //console.log(customer)
        for (var idx in customer){
            console.log(customer[idx]);
            sharehouse = new SharehouseModel(customer[idx]);
            sharehouse.save( function(err, data) {
                if(err) return res.json(err);
            })
        }
      } catch(err) {
        console.log(err)
        return res.json(err);
      }
}