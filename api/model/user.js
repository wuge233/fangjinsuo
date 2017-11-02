/**
 * Created by Administrator on 2017/10/28 0028.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = {
    name:{type:Number},
    password:{type:String}
};

var user = mongoose.model('user',new Schema(user));

module.exports = user;