var express = require('express');
var router = express.Router();

var mongooseDrv = require("mongoose");
var schema = mongooseDrv.Schema;
mongooseDrv.connect('mongodb://localhost/groundbnb',{useMongoClient:true});
var connection = mongooseDrv.connection;

var grid = require("gridfs-stream")
var mongo = require('mongodb')
grid.mongo = mongooseDrv.mongo;



/* GET home page. */
router.get('/', function(req, res, next) {
  var gridfs = grid(connection.db, mongo);
  var readstream = gridfs.createReadStream({
    filename: "article.jpg"
  });
  
  readstream.on('data', (chunk) => {
    res.render('index', { image: chunk.toString('base64') });
  })
  // readstream.pipe(fsstreamwrite);
  // readstream.on("close",function(file){
  //     console.log("File Read successfully from database");
  // });

  //res.render('index', { title: 'Express', gfs });
});

module.exports = router;
