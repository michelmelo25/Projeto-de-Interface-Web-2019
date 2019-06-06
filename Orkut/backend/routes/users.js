var express = require('express');
var router = express.Router();
var userServise = require('../service/user.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.post('/register', function(req, res) {
  console.log(req.body)
  var user = userServise.register(req.body);
  res.json(user);
});

module.exports = router;
