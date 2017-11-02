/**
 * Created by Administrator on 2017/10/28 0028.
 */
var express = require('express');
var router = express.Router();
var User = require("../model/user");

router.get('/', function(req, res, next) {
    res.render('register', { title: 'register' });
});

router.post('/', function(req, res) {
    //console.log(req.body);
    //创建一条文档
    User.create({
        name: req.body.name,
        password: req.body.password
    },function(error,result){
        if(!error) {
        //    跳转页面
            res.redirect("/login");
        }else {
            console.log(error);
        }
    })
});

module.exports = router;
