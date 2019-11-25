var express = require('express');
var router = express.Router();

router.get('room',function(){

    res.render('room',{title:'room'});
});

module.exports = router;