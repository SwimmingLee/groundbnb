var express = require('express');
var router = express.Router();
var multer = require('multer');
//dest 지정시 저장, 안 쓰면 메모리 buffer에 남음
//var upload = multer({dest: './uploads/'});
//var upload = multer();
var upload = multer({
    storage: multer.diskStorage({
        destination(req,file,cb){
            cb(null,'uploads/');
        },
        filename(req,file,cb){
            cb(null,'received.png')
        }
    })
})
// var spawn = require("child_process").spawn;
// var py = spawn('python',['qrBinary.py']);




//1. 파일 post로 날아오면 해당 바이너리를 arg로 해서 바로 파이썬에 넣기(X)
//2. 일단 uploads폴더에 넣고, 경로 파이썬에 전달
//이후 decoding된 QR코드의 페이지로 자동으로 이동되게 하기
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

router.post('/', upload.single('media'), function(request, respond,next) {
    if(request.file) {
        //메모리 buffer로 올 경우 buffer 출력
        //console.log("버퍼 : " + request.file.buffer)
        //full 파일경로 획득 가능    
        console.log("현재 파일위치 : "+request.file.path)
        console.log("받은 req의 타입 : "+typeof request.file.path);
        
        var spawn = require("child_process").spawn,
            py = spawn('python',[__dirname + '\\qrBinary.py']);
        //     data = request.file.path;
        var data = request.file.path;

        // //py쪽으로부터 데이터(주소)가 오면
        py.stdout.on('data',function(data){
            console.log("결과는 : "+data);
        });
        py.stderr.setEncoding('utf8')
        py.stderr.on('data',function(data){
            console.log("실행실패!");
            console.error(data);
        });
        py.stdout.on('end',function(){
            console.log("해독 완료, 이동합니다.");
        });

        // //py.stdin.write(JSON.stringify(data));
        py.stdin.write(data);
        py.stdin.end();
        //respond.sendStatus(status);
        respond.sendStatus(status)
    }
    else {
        respond.sendStatus(status);
    }
})
module.exports = router;