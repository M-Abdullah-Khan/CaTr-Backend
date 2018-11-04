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

  connection.query(
    "SELECT * FROM `bio` WHERE `email` = ?",
    [email], function(err, row, field) {
      if (err) {
        console.log(err);
        res.send({ 'success' : false, 'message': 'could not connect to database'});
      }
      if(row.length > 0) {
        res.send({
          'success' : true,
          'message':'connected',
          'fname': ""+row[0].fname,
          'gender': row[0].gender,
          'phone': ""+row[0].phone,
          'phone2': ""+row[0].phone2,
          'dob': ""+row[0].dob,
          'ed1': ""+row[0].ed1,
          'ed2': ""+row[0].ed2,
          'ed3': ""+row[0].ed3,
          'ed4': ""+row[0].ed4,
          'ed5': ""+row[0].ed5,
          'ed1from': ""+row[0].ed1from,
          'ed2from': ""+row[0].ed2from,
          'ed3from': ""+row[0].ed3from,
          'ed4from': ""+row[0].ed4from,
          'ed5from': ""+row[0].ed5from,
          
          'cursal': ""+row[0].cursal,
          'expsal': ""+row[0].expsal,
          'curjob': ""+ row[0].curjob,
          'curjobat': ""+row[0].curjobat,
          
          'skill1': ""+row[0].skill1,
          'skill2': ""+row[0].skill2,
          'skill3': ""+row[0].skill3,
          'skill4': ""+row[0].skill4,
          'skill5': ""+row[0].skill5,
          'skill1l': ""+row[0].skill1l,
          'skill2l': ""+row[0].skill2l,
          'skill3l': ""+row[0].skill3l,
          'skill4l': ""+row[0].skill4l,
          'skill5l': ""+row[0].skill5l,
          
          'curcity': ""+row[0].curcity,
          'favcity1': ""+row[0].favcity1,
          'favcity2': ""+row[0].favcity2,
          'favcity3': ""+row[0].favcity3,
          'favcomp1': ""+row[0].favcomp1,
          'favcomp2': ""+row[0].favcomp2,
          'favcomp3': ""+row[0].favcomp3
        });
      }
      else {
        res.send({ 'success' : false, 'message': 'user not found'});  
      }
    });
});

module.exports = router;
