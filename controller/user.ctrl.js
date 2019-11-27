var mongoose = require('mongoose');
var UserModel = require('../models/userSchema');
var jwt = require('jsonwebtoken');


exports.addUser = function(req, res) {
    const {userId} = req.body;

    const create = (user) => {
        if(user){
            throw new Error('username exists');
        } else {
            return UserModel.create(req.body);
        }
    }

    const respond = () => {
        res.json({
            message: 'registered successfully',
        });
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message,
        })
    }

    UserModel.findOneByUserID(userId)
        .then(create)
        .then(respond)
        .catch(onError)
}

exports.getAlluser = (req, res) => {
    return UserModel.find(function(err, user) {
        if(err) return res.send(err);
        return res.send(user);
    })
}


exports.login = (req, res) => {
    const {userId, userPwd} = req.body;
    
    const check = (user) => {
        if(!user) {
            throw new Error('login falied');
        } else{
            if (user.verify(userPwd)) {
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            userId: user.userId
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '15m',
                            issuer: 'Admim_swimmingLee',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if (err) reject(err);
                            resolve(token);
                        }
                    )
                })
                return p;
            } else {
                res.send('login-failed');
                throw new Error('login failed');
            }
        }
    }

    const respond = (token) => {
        res.json({
            message: 'logged in successfully',
        })
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message,
        })
    }

    UserModel.findOneByUserID(userId)
            .then(check)
            .then(respond)
            .catch(onError)
}

exports.getUserById = function(req, res) {
    console.log('Get a user');
    return UserModel.findById(req.params.id, function(err, data){
        if(err) res.send(err);
        return res.json(data);
    })
}

exports.deleteUserById = function(req, res) {
    UserModel.findOneAndRemove(
        {_id: req.params.id}, function(err, data) {
            if(err) return res.send(err);
            return res.json(data);
    })
}

exports.updateUser = function(req, res) {
    return UserModel.findByIdAndUpdate(
        req.params.id, req.body, {new: true}, function(err, data){
            if (err) res.send(err);
            return res.json(data);
        }
    )
}