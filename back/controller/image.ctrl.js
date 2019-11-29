var mongoose = require('mongoose');
var ImageModel = require('../models/sharehouseSchema');
var ImageModel = require('../models/imageSchema');
var multer = require('multer');

var multerImage = multer({dest: 'uploads/'});

exports.upload = multerImage.single('image');
exports.uploadImage = function(req, res) {
    console.log('Add a new image ' + req.file);
    image = new ImageModel({
        ImageId: req.body.ImageId ,
        fileUrl: req.file.filename
    });
    return image.save( function(err, data) {
        if(err) return res.json(err);
        return res.json(data);
    })
}

exports.getImageById = function(req, res) {
    console.log('Get a Image');
    return ImageModel.findById(req.params.id, function(err, data){
        if(err) res.send(err);
        return res.json(data);
    })
}

exports.deleteImageById = function(req, res) {
    ImageModel.findOneAndRemove(
        {_id: req.params.id}, function(err, data) {
            if(err) return res.send(err);
            return res.json(data);
    })
}


exports.importdummy = (req, res) => {
    try {
        const path = './sharehouse_dummy.json'
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
