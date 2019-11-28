var mongoose = require('mongoose');
var crypto = require('crypto');

mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    userId: String,
    userPwd: String,
    userThumbnail: String,
    nickName: String,
    age: Number,
    email: String,
    address: String,
    introduction: String 
    
})

UserSchema.statics.create = function(user){
 
    const {userId, userPwd, userThumbnail, nickName, age, email, address, introduction} = user;

    const encrypted = crypto.createHmac('sha1', process.env.JWT_SECRET)
                            .update(userPwd)
                            .digest('base64')
    
    const newUser = new this({
        userId,
        userPwd:encrypted,
        userThumbnail,
        nickName,
        age,
        email,
        address,
        introduction
    })

    return newUser.save();
}

UserSchema.statics.findOneByUserID = function(userId) {
    return this.findOne({
        userId
    });
}


UserSchema.methods.verify = function(password) {
    
    const encrypted = crypto.createHmac('sha1', process.env.JWT_SECRET)
                            .update(password)
                            .digest('base64')
    return this.userPwd === encrypted;
}


module.exports = mongoose.model('user', UserSchema);
