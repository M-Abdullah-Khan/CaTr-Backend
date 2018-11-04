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
  	"SELECT myid, phone, fname, email FROM `bio` WHERE myid = (SELECT myid FROM `user` WHERE `email` = ? AND `password` = ?);",
  	[email,password], function(err, row, field) {
  		if (err) {
  			console.log(err);
  			res.send({ 'success' : false, 'message': 'could not connect to database'});
  		}
  		if(row.length > 0) {
        var fname = null;
        if(row[0].fname === null){
          res.send({
            'success' : true,
            'myid': ""+row[0].myid,
            'fname': "",
            'email': row[0].email,
          });
        }
        else{
    			res.send({
            'success' : true,
            'myid': ""+row[0].myid,
            'fname': row[0].fname,
            'email': row[0].email,
            'phone': row[0].phone,
          });
  		  }
      }
  		else {
  			res.send({ 'success' : false, 'message': 'Email not Found! Try again or try to recover!'});	
  		}
  	});
});

module.exports = router;
