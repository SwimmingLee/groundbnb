var spawn = require("child_process").spawn,
    py = spawn('python',['end.py']),
    data = "uploads\04b251c4f59cf51144043cf719adf3d7";
            
    //py쪽으로부터 데이터(주소)가 오면
    py.stdout.on('data',function(data){
        console.log("데이터는"+data);
    })
    py.stderr.on('data',function(data){
        console.log("실행실패!");
    });
    py.stdout.on('end',function(){
        console.log("실행 종료");
    })

    //py.stdin.write(JSON.stringify(data));
    py.stdin.write(data);
    py.stdin.end();