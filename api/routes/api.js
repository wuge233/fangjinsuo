var express = require("express");
var router = express.Router();
var user =require("../model/user");



router.post("/register",function(req,res){
  user.find({
    username:req.body.username
  },function(error,result){
      if(!error){
        if(result.length == 0){
          user.create({
            username:req.body.username,
            password:req.body.password
          },function(error,result){
            if(!error){
              res.send(true);
            }else{
              res.send(false);
            }
          })
        }else {
          res.send(false)
        }
      }
  })
});
router.post("/logon",function(req,res){
  user.find({
    username:req.body.username,
    password:req.body.password
  },function(error,result){
    if(!error){
      if(result.length > 0){
        res.send(true)
      }else {
        res.send(false)
      }
    }else{
      res.send(false)
    }
  })
});
module.exports = router;
