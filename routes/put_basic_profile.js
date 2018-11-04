var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host :'localhost',
  user : 'root',
  password : '',
  database : 'instaclone'
});

router.post('/', function(req, res, next) {
  
  var fullname = req.body.fullname;
  var gender = req.body.gender;
  var dob = req.body.dobY + "-" + req.body.dobM + "-" + req.body.dobD;
  var Phone = req.body.Phone;
  var Phone2 = req.body.Phone2;
  var email = req.body.email;
  connection.query(
    "UPDATE bio SET fname = ? , gender = ? ,`dob` = ? ,Phone = ? ,Phone2 = ? WHERE email = ? ",
    [fullname, gender, dob, Phone, Phone2, email], function(err, row, field) {
      if (err) {
        console.log(err);
        //In future send error code then in frontend display appropriate error
        res.send({ 'success' : false, 'message': 'Please Enter Right Information Error Code 1'});
      }
      else {
        res.send({ 'success' : true, 'message': 'Basic Profile Set'});  
      }
    });
});

module.exports = router;
