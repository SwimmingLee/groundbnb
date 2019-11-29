var express = require('express');
var userModel = require('../../../controller/user.ctrl');
var router = express.Router();


router.route('/')
    .get(userModel.getAlluser)
    .post(userModel.addUser)
router.route('/:userId')
    .get(userModel.getUserById)
    .delete(userModel.deleteUserById)
    .put(userModel.updateUser)
router.route('/login')
    .post(userModel.login)

module.exports = router;



