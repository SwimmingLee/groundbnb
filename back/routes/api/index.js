var express = require('express');
var sharehouse = require('./sharehouse/index');
var sharehouseModel = require('../../controller/sharehouse.ctrl');
var userModel = require('../../controller/user.ctrl')
var reviewModel = require('../../controller/review.ctrl')
var user = require('./user/index');
var router = express.Router();


router.use('/sharehouse', sharehouse);
router.use('/user', user);
router.get('/dummy/sharehouse', sharehouseModel.importdummy);
router.get('/dummy/user', userModel.importdummy);
router.get('/dummy/review', reviewModel.importdummy);

module.exports = router;



