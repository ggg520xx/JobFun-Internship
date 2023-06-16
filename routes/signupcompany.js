var express = require('express');
var router = express.Router();
const conn = require('../dbconncet.js')


router.get('/',function(req, res, next) {
  res.render('signupcompany', { title: 'signupcompany'});
});

router.post('/',function(req,res,next){
  
  var sql = `select * from company where companyAccount = "${req.body.cpAccount}"`
  var sqlSignup = `insert into company (companyAccount,companyPassword,companyName,companyEmail,companyPhone,companyCheck)values("${req.body.cpAccount}","${req.body.cpPassword}","${req.body.cpName}","${req.body.cpEmail}","${req.body.cpPhone}","pending")`
  conn.queryAsync(sql).then((result)=>{
    
    if (result.length > 0) {
      res.json({signupResult:'same'})
    }else{
      conn.queryAsync(sqlSignup).then((result)=>{
        res.json({signupResult:'success'})
        return
      })
    }
    return
  })

});
module.exports = router;
