var express = require('express');
var sharehouseModel = require('../../../controller/sharehouse.ctrl');
var scheduleModel = require('../../../controller/schedule.ctrl');
var reviewModel = require('../../../controller/review.ctrl');
var imageModel = require('../../../controller/image.ctrl')
var router = express.Router();


router.route('/')
    .post(sharehouseModel.addSharehouse)
    .get(sharehouseModel.getAllSharehouse)
router.route('/:houseId')
    .get(sharehouseModel.getSharehouseById)
    .delete(sharehouseModel.deleteSharehouseById)
    .put(sharehouseModel.updateSharehouse)

router.route('/schedule')
    .post(scheduleModel.addSchedule)
router.route('/schedule/:houseId')
    .get(scheduleModel.getScheduleById)
    .delete(scheduleModel.deleteScheduleById)
    .put(scheduleModel.updateSchedule)

router.route('/review')
    .post(reviewModel.addReview)
router.route('/review/:houseId')
    .get(reviewModel.getReviewById)
    .delete(reviewModel.deleteReviewById)
    .put(reviewModel.updateReview)

router.route('/img')
    .post(imageModel.upload, imageModel.uploadImage)
router.route('/img/:houseId')
    .get(imageModel.getImageById)
    .delete(imageModel.deleteImageById)


module.exports = router;



