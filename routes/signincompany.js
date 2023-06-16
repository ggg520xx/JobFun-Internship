var express = require('express');
var router = express.Router();
const conn = require('../dbconncet.js')


router.get('/', function(req, res, next) {
  res.render('signincompany', { title: 'signincompany'});
});

router.post('/', function(req, res, next) {

  var sql = `select * from company where companyAccount = "${req.body.cUserName}" and companyPassword = "${req.body.cUserPassword}" `
  conn.queryAsync(sql).then((result)=>{
    if(result.length == 0 ){
      res.json(result)
      
    }else{
      req.session.userName = req.body.cUserName;
      req.session.userCharacter = "company";
      req.session.userId = result[0].companyId;
      req.session.userMemberName = result[0].companyName
      
      res.json(result);
    }

  })

});

module.exports = router;
