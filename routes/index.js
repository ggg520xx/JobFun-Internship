var express = require('express');
var router = express.Router();
const conn = require('../dbconncet')
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jobfun.service@gmail.com",  
        pass: "funmail1211" 
    }
});


router.get('/', function(req, res, next) {

  var techJob = `SELECT job.*,company.companyPhoto1 from job as job join company as company on job.companyId = company.companyId WHERE job.jobClassId =1 or job.jobClassId = 2 or job.jobClassId = 15 or job.jobClassId = 18 or job.jobClassId = 22 ORDER BY RAND() LIMIT 3`
  var techResult;
  var marketJob = `SELECT job.*,company.companyPhoto1 from job as job join company as company on job.companyId = company.companyId WHERE job.jobClassId =6 or job.jobClassId = 7 or job.jobClassId = 9 or job.jobClassId = 10 or job.jobClassId = 12 ORDER BY RAND() LIMIT 3`
  var marketResult;
  var designJob = `SELECT job.*,company.companyPhoto1 from job as job join company as company on job.companyId = company.companyId WHERE job.jobClassId =23 or job.jobClassId = 24 or job.jobClassId = 25 ORDER BY RAND() LIMIT 3`
  var designResult;

  var cityListResult;
  var jobClassResult;
  var townsListResult;
  var companyInfoResult;
  conn.queryAsync(`select * from citylist `).then(
    (result)=>{
      cityListResult = result;
      return conn.queryAsync(`select * from jobclass`)
    }
  ).then(
    (result)=>{
      jobClassResult = result;
      return conn.queryAsync(` SELECT townlist.* , citylist.cityName from townlist as townlist join citylist as citylist ON townlist.cityId = citylist.cityId`)
    }
  ).then(
    (result)=>{
      townsListResult = result;
      return conn.queryAsync(`select * from company ORDER BY RAND() LIMIT 3`)
    }
  ).then(
    (result)=>{
      companyInfoResult = result;
      return conn.queryAsync(techJob)
    }
  ).then((result)=>{
    techResult = result;
    return conn.queryAsync(marketJob)
  }).then((result)=>{
    marketResult = result;
    return conn.queryAsync(designJob)
  }).then((result)=>{
    designResult = result;

    res.render('index',{title:"index",
                          sessionUserName:req.session.userName,
                          sessionUserCharacter:req.session.userCharacter,
                          sessinoUserMemberName:req.session.userMemberName,
                          cityList:cityListResult,
                          jobClassList:jobClassResult,
                          townsList:townsListResult ,
                          companyInfo:companyInfoResult,
                          tech:techResult,
                          market:marketResult,
                          design:designResult
                          })
    
  })


});


router.post('/replymail', function(req, res, next) {

  var mailOptions = {
    from: "jobfun.service@gmail.com",  
    to: `${req.body.userEmail}`, 
    subject: "實習趣-找實習的小幫手", 
    text: `${req.body.userName}  您好: \n感謝你提供的回饋及建議，\n實習趣會依您的回饋做出對應調整。\n謝謝!`  
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log("訊息發送: " + info.response);
        
        res.json({"mail":"success"})
    }
  });
})

module.exports = router;
