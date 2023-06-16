var express = require('express');
var router = express.Router();
const conn = require('../dbconncet')
const url = require('url');


//DateFormat
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小時 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o){
         if (new RegExp("(" + k + ")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));    
         }
    }
    return fmt;
}
//

router.get('/', function(req, res, next) {
  
  var memberId = req.session.userId;
  var memberAccount = req.session.userName;
  var userCharacter = req.session.userCharacter;

  var result = url.parse(req.url,true)
  var jobId = result.query.id;

  var jobSql = `SELECT job.* ,DATE_FORMAT(job.jobStartTime, "%Y-%m-%d") as jobStartTimeF,DATE_FORMAT(job.jobEndTime, "%Y-%m-%d") as jobEndTimeF, townlist.* , citylist.cityName ,company.companyName ,jobclass.jobClassName, company.companyPhoto1, company.companyPhoto2, company.companyPhoto3, company.companyPhoto4, company.companyPhoto5 FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobId =  "${jobId}" `
  var jobResult;

  var collectSql = `select * from collectlist where jobId= "${jobId}" and memberId = "${req.session.userId}"` 
  var collectResult ;

  var outPutResumeSql = `SELECT resume.*,member.memberAccount FROM resume as resume join member as member on resume.memberId = member.memberId where resume.memberId = "${memberId}" AND member.memberAccount = "${memberAccount}"`
  var resumeResult;
  conn.queryAsync(jobSql).then((result)=>{
    
    jobResult = result;
    return conn.queryAsync(collectSql)
   

  }).then((result)=>{

    collectResult = result;

    return conn.queryAsync(outPutResumeSql)
    
  }).then((result)=>{
    resumeResult = result;

    res.render('job', { title: 'job',jobInfo:jobResult,
    collection:collectResult,
    sessionUserName:req.session.userName,
    sessionUserCharacter:req.session.userCharacter,
    sessionUserId:req.session.userId,
    sessinoUserMemberName:req.session.userMemberName,
    userResume:resumeResult
    
    });
  })
  
});

//收藏
router.post('/collect', function(req, res, next) {

  var jobId = req.body.jobId;
  var memberId = req.body.memberId;
  var userCharacter = req.body.userCharacter
  

  var checkSql = `select * from collectlist where memberId = ${memberId} and jobId = ${jobId}`
  var addSql = `insert into collectlist (memberId,jobId) values ("${memberId}","${jobId}")`
  var removeSql = `DELETE FROM collectlist WHERE memberId = ${memberId} and jobId = ${jobId}`
  
  if (userCharacter == "Guest" ) {
    res.json({errCode:"1",errMsg:"登入後才能收藏"})
  }else if(userCharacter == "company"){
    res.json({errCode:"2",errMsg:"學生才能收藏喔"})
  }else{
    conn.queryAsync(checkSql).then((result)=>{
      if(result.length == 0){
        conn.queryAsync(addSql).then((result)=>{
          res.json(result)
        })

      }else{
        conn.queryAsync(removeSql).then((result)=>{
          res.json(result)
        })
        
      }
    })
  }
  
});

//應徵
router.post('/applyjob', function(req, res, next) {
  var applyDate = new Date().Format("yyyy-MM-dd");
  var checkAppy = `select * from jobapply where memberId = "${req.body.memberId}" and jobId = "${req.body.jobId}"`
  var applySql = `insert into jobapply (memberId,jobId,resumeId,msgForCompany,applyDate) values("${req.body.memberId}","${req.body.jobId}","${req.body.resumId}","${req.body.msgForCompany}","${applyDate}")`

  conn.queryAsync(checkAppy).then((result)=>{
    if (result.length > 0) {
      res.json({resError:"applied"})
    }else{
      conn.queryAsync(applySql).then((result)=>{
        res.json(result)
      })
    }
    
  })
  
});

module.exports = router;
