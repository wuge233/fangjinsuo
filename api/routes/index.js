var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.myuser){
    res.render('index', { title: 'Express', name:req.session.myuser.name});
  }

});

module.exports = router;
