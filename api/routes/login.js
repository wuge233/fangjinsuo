/**
 * Created by Administrator on 2017/10/28 0028.
 */
var express = require('express');
var router = express.Router();
var User = require("../model/user");

router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

router.post('/', function(req, res) {
    //console.log(req.body);
    User.find({
        name: req.body.name,
        password: req.body.password
    },function(error,result){
        if(!error){
            console.log(result);
            if(result.length>0){
                //将无效session设置成有效session
                req.session.myuser = result[0];
                res.redirect("/");
            }else{
                res.render('login', { title: 'login' });
            }
        }
    })
});

module.exports = router;