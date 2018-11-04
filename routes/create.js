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
  
  var email = req.body.email;
  var password = req.body.password;

  connection.query(
  	"INSERT INTO user(email, password) VALUES (?,?)",
  	[email,password], function(err, row, field) {
  		if (err) {
  			console.log(err);
  			res.send({ 'success' : false, 'message': 'could not connect to database'});
  		}
  		else {
  			res.send({ 'success' : true, 'email': email });
  		}
  	});
});

module.exports = router;
