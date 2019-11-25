var mongooseDrv = require('mongoose');

mongooseDrv.connect('mongodb://localhost/groundbnb',{useMongoClient:true});

var connection = mongooseDrv.connection;

if(connection !== "undefined"){
    console.log(connection.readyState.toString());

    var path = require("path");

    var grid = require("gridfs-stream");

    var fs = require("fs");

    var filesrc = path.join(__dirname, "./filestoread/article.jpg");

    grid.mongo = mongooseDrv.mongo;

    connection.once("open",()=>{
        console.log("Connection Open");
        var gridfs = grid(connection.db);
        if(gridfs){
            var streamwrite =gridfs.createWriteStream({
                filename: "article.jpg"
            });

            fs.createReadStream(filesrc).pipe(streamwrite);

            streamwrite.on('close',function(file){
                console.log("write written successfully in database");
                
            });
        }
        else {
            console.log("Sorry No Grid FS Object");
        }

        console.log("Done");
    })
}