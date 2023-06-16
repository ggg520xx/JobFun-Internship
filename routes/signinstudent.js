var express = require('express');
var router = express.Router();
const conn = require('../dbconncet.js')

router.get('/', async function(req, res, next) {
  
  res.render('signinstudent', { title: 'signinstudent'});
});

router.post('/', function(req, res, next) {
  
  conn.query(`select * from member where memberAccount = "${req.body.sUserName}" and memberPassword = "${req.body.sUserPassword}" `,
  (err, result)=>{
    if(err){ console.log("錯誤: "+err) 
    }

    if(result.length == 0 ){
      res.json(result)
      
    }else{
      req.session.userMemberName = result[0].memberName
      req.session.userName = req.body.sUserName;
      req.session.userCharacter = "student";
      req.session.userId = result[0].memberId;
      res.json(result)
    }
  });

});

module.exports = router;
