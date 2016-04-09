var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.route('/list')
    .get(function (req,res) {
      var file = path.join(__dirname, '..', 'server/files/users.json');
      console.log(file);
      res.sendFile(file);
    });

module.exports = router;
