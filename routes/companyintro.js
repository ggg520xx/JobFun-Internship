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
  var companyIntroId = result.query.id;
  
  
  var sqlCompany = ` SELECT * from company where companyId = "${companyIntroId}"`
  var companyInfoResult ;

  var sqlJob = `SELECT job.* , townlist.* , citylist.cityName ,company.companyName ,jobclass.jobClassName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.companyId = "${companyIntroId}" ORDER BY job.jobAddtime desc`
  var jobResult ;

  conn.queryAsync(sqlCompany).then((result)=>{
    companyInfoResult = result;
    return conn.queryAsync(sqlJob)
  }).then((result)=>{
    console.log(result);
    jobResult = result;
    res.render('companyintro', { title: 'companyintro',
    sessionUserName:req.session.userName,
    sessionUserCharacter:req.session.userCharacter,
    sessionUserId:req.session.userId,
    companyInfo:companyInfoResult,
    sessinoUserMemberName:req.session.userMemberName,
    jobInfo:jobResult
    });
  })

   
});



module.exports = router;
