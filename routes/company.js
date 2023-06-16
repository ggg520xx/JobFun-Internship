var express = require('express');
var router = express.Router();
const conn = require('../dbconncet')

const multer = require('multer');


//上傳LOGO用 set up
var inStorage = multer.diskStorage({
    destination:function (req, res, cb) {
        cb(null,"./public/img/companylogo");  //自定保存路徑
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // 自定義檔案名稱
    }
});

var upload = multer({
    storage: inStorage,  // 設置 storage
    fileFilter: function (req, file, cb) {  // 檔案過濾
        if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
            cb(null, true)
        }else{
            return cb(new Error('Wrong file type'));
        }
        
    }
});
//上傳大頭貼 END


//上傳公司照片set up
var inStorage = multer.diskStorage({
    destination:function (req, res, cb) {
        cb(null,"./public/img/companyintrophoto");  //自定保存路徑
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // 自定義檔案名稱
    }
});

var uploadCompPto = multer({
    storage: inStorage,  // 設置 storage
    fileFilter: function (req, file, cb) {  // 檔案過濾
        if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
            cb(null, true)
        }else{
            return cb(new Error('Wrong file type'));
        }
        
    }
});
//上傳公司照片END

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







//進入會員頁
router.get('/', async function(req, res, next) {

  var userName = req.session.userName;
  var userCharacter = req.session.userCharacter;
  var userId = req.session.userId;
  var userMemberName = req.session.userMemberName;

  
  var sqlCompany = `SELECT company.* , townlist.townshipName, citylist.cityName FROM company as company Left join townlist as townlist on company.companyAera = townlist.townshipId LEFT JOIN citylist as citylist on townlist.cityId = citylist.cityId where company.companyId ="${userId}"`;
  var companyResult ;
  var jobResult ;
  var cityListResult;
  var jobClassResult;
  var townsListResult;

  var countJobApply = `SELECT jobapply.*, member.memberName, job.jobName,job.companyId ,company.companyName FROM jobapply as jobapply join member as member on jobapply.memberId = member.memberId join job as job on jobapply.jobId = job.jobId join company AS company on job.companyId = company.companyId WHERE company.companyId ="${userId}"`
  var countJobApplyResult;


  if (userName == "Guest") {
    res.redirect("/signincompany")
  }else{
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
      return conn.queryAsync(sqlCompany)
    }).then((result)=>{
      companyResult=result;
      
      return conn.queryAsync(`SELECT job.* , townlist.* , citylist.cityName ,company.companyName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId WHERE job.companyId = "${userId}" ORDER BY job.jobAddtime desc`)
    }).then((result)=>{
      jobResult = result;
      return conn.queryAsync(countJobApply)
      
    
    }).then((result)=>{
      countJobApplyResult = result;
      console.log(companyResult);
      res.render('company',{title:"company",
                          cityList:cityListResult,
                          jobClassList:jobClassResult,
                          townsList:townsListResult ,
                          companyInfo:companyResult,
                          jobInfo:jobResult,
                          countApply:countJobApplyResult,
                          sessionUserMemberName:userMemberName
                          })
    })
  }
});

//新增或修改廠商介紹
router.post('/intro',function(req, res, next){
  var introSql = `update company set companyAera = "${req.body.aera}", companyAddress = "${req.body.address}",companyIntro = "${req.body.intro}" where companyId = "${req.body.companyId}"`
  conn.queryAsync(introSql).then((result)=>{
    res.json(result)
  })
})

//新增職缺
router.post('/addjob',function(req,res,next){
  var addTime = new Date().Format("yyyy-MM-dd HH:mm:ss");
  var addJobSql = `insert into job (jobName, companyId, jobClassId, jobAera, jobAddress, jobAddtime, jobStartTime, jobEndTime, jobContent, jobPay, jobCondition, jobStatus) values ("${req.body.addJobName}","${req.body.companyId}","${req.body.addJobClass}","${req.body.addJobArea}","${req.body.addJobAddress}","${addTime}","${req.body.addJobStartTime}","${req.body.addJobEndTime}","${req.body.addJobIntro}","${req.body.addJobPay}","${req.body.addJobCondition}","on")`
  var updatedSql = `SELECT job.* , townlist.* , citylist.cityName ,company.companyName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId WHERE job.companyId = "${req.session.userId}" ORDER BY job.jobAddtime desc`
  conn.queryAsync(addJobSql).then((result)=>{
    return conn.queryAsync(updatedSql)
  }).then((result)=>{
    res.json(result)
  })
})

//更改上下架狀態
router.post('/chjobstatus',function(req,res,next){
 var firstSql = `select jobStatus from job where jobId = "${req.body.aJobId}"` 
 var firstResult;
 var jobStatusToOn =`UPDATE job set jobStatus = "on" where jobId = "${req.body.aJobId}"`
 var jobStatusToOff =`UPDATE job set jobStatus = "off" where jobId = "${req.body.aJobId}"`
 
 
 conn.queryAsync(firstSql).then((result)=>{
    firstResult = result
    if(firstResult[0].jobStatus == "on"){
      console.log("目前是上架")
      return conn.queryAsync(jobStatusToOff)
    }else{
      console.log("目前是下架")
      return conn.queryAsync(jobStatusToOn)
    }
}).then((result)=>{
  res.json(result)
})

})

//選擇上下架分類
router.post('/selectstatus',function(req,res,next){
  var userId = req.session.userId;
  if(req.body.statusData == "on"){
    var onSql = `SELECT job.* , townlist.* , citylist.cityName ,company.companyName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId WHERE job.companyId = "${userId}" and job.jobStatus = "on" ORDER BY job.jobAddtime desc`
    conn.queryAsync(onSql).then((result)=>{
      res.json(result)
    })
  
  }else if(req.body.statusData == "off"){
    var offSql = `SELECT job.* , townlist.* , citylist.cityName ,company.companyName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId WHERE job.companyId = "${userId}" and job.jobStatus = "off" ORDER BY job.jobAddtime desc`
    conn.queryAsync(offSql).then((result)=>{
      res.json(result)
    })
  }else{
    var allSql = `SELECT job.* , townlist.* , citylist.cityName ,company.companyName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId WHERE job.companyId = "${userId}"  ORDER BY job.jobAddtime desc`
    conn.queryAsync(allSql).then((result)=>{
      res.json(result)
    })
  }
})

//打開修改
router.post('/openedit',function(req, res, next){
  
  var selectSql = `SELECT job.* ,DATE_FORMAT(job.jobStartTime, "%Y-%m-%d") as jobStartTimeF,DATE_FORMAT(job.jobEndTime, "%Y-%m-%d") as jobEndTimeF,  townlist.* , citylist.cityName ,company.companyName ,jobclass.jobClassName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobId =  "${req.body.jobId}" `
  conn.queryAsync(selectSql).then((result)=>{
    res.json(result);
  })
})

//確認修改
router.post('/editjob',function(req, res, next){
  var editJobSql = `update job set jobName = "${req.body.eJobName}",jobClassId = "${req.body.eJobClassVal}",jobAera = "${req.body.eJobAreaVal}",jobAddress = "${req.body.eJobAddress}" ,jobStartTime = "${req.body.eJobStart}" ,jobEndTime = "${req.body.eJobEnd}",jobContent = "${req.body.eJobIntro}",jobPay = "${req.body.eJobPay}",jobCondition = "${req.body.eJobCondition}" where jobId = "${req.body.eJobId}" `
  var updatedSql = `SELECT job.* , townlist.* , citylist.cityName ,company.companyName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId WHERE job.companyId = "${req.session.userId}" ORDER BY job.jobAddtime desc`
  conn.queryAsync(editJobSql).then((result)=>{
    return conn.queryAsync(updatedSql)
  }).then((result)=>{
    res.json(result);
  })
})

//刪除職缺
router.post('/deletejob',function(req,res,next){
  var userName = req.session.userName;
  var delSql = `DELETE FROM job WHERE jobId= ${req.body.jobId}`
  var updatedSql =`SELECT job.* , townlist.* , citylist.cityName ,company.companyName FROM job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId WHERE company.companyAccount = "${userName}" ORDER BY job.jobAddtime desc`
  conn.queryAsync(delSql).then((result)=>{
    return conn.queryAsync(updatedSql)
  }).then((result)=>{
    res.json(result)
  })

  
})

//查看履歷
router.post('/checkapplyresume',function (req,res,next) {
  var applySql = `select jobapply.* ,member.memberName, member.memberGender,YEAR( FROM_DAYS( DATEDIFF( NOW( ) , member.memberBirth ) ) ) AS age ,member.majorName,member.studentCardFront,member.studentCardBack ,school.schoolName,resume.resumeEmail,resume.resumePhone,resume.resumeSkill,resume.resumeFile from jobapply as jobapply join member as member on jobapply.memberId = member.memberId join resume as resume on jobapply.resumeId = resume.resumeId join school as school on member.schoolId = school.schoolId where jobapply.jobAppyId = "${req.body.applyId}"`
  
  conn.queryAsync(applySql).then((result)=>{
    res.json(result)
  })
})

//邀請面試
router.post('/inviteapply',function(req,res,next){
  var inviteSql = `update jobapply set companyReply = "invite" ,companyReplyMsg = "${req.body.inviteMsg}" where jobAppyId = "${req.body.jobAppyId}"`
  var updatedSql = `select * from jobapply where jobAppyId = "${req.body.jobAppyId}"`
  conn.queryAsync(inviteSql).then((result)=>{
    return conn.queryAsync(updatedSql)
  }).then((result)=>{
        res.json(result)
  })
})

//拒絕
router.post('/rejectapply',function(req,res,next){
  var rejectSql = `update jobapply set companyReply = "reject" ,companyReplyMsg = "${req.body.rejectMsg}" where jobAppyId = "${req.body.jobAppyId}"`
  var updatedSql = `select * from jobapply where jobAppyId = "${req.body.jobAppyId}"`
  conn.queryAsync(rejectSql).then((result)=>{
    return conn.queryAsync(updatedSql)
  }).then((result)=>{
    res.json(result)
  })
})

//改帳號資料
router.post('/editaccount',function(req,res,next){
   var sql = `update company set companyPassword="${req.body.editPassword}",companyPhone="${req.body.editPhone}",companyEmail="${req.body.editEmail}" where companyId = "${req.body.editMemberId}"`
  conn.queryAsync(sql).then((result)=>{
    res.json(result)
  })
})

//換LOGO
router.post('/chlogo',upload.array('file'),function(req,res,next){
  
  var filePath = req.files[0].filename;

  var sql = `UPDATE company SET companyLogo = "${filePath}" WHERE companyId = ${req.body.companyId}`

  conn.queryAsync(sql).then((result)=>{
    
    res.json(result)
  })
})

//photo1
router.post('/chcompanyphoto1',uploadCompPto.array('file'),function(req,res,next){
  
  var filePath = req.files[0].filename;

  var sql = `UPDATE company SET companyPhoto1 = "${filePath}" WHERE companyId = ${req.body.companyId}`

  conn.queryAsync(sql).then((result)=>{
    
    res.json(result)
  })
})

//photo2
router.post('/chcompanyphoto2',uploadCompPto.array('file'),function(req,res,next){
  
  var filePath = req.files[0].filename;

  var sql = `UPDATE company SET companyPhoto2 = "${filePath}" WHERE companyId = ${req.body.companyId}`

  conn.queryAsync(sql).then((result)=>{
    
    res.json(result)
  })
})

//photo3
router.post('/chcompanyphoto3',uploadCompPto.array('file'),function(req,res,next){
  
  var filePath = req.files[0].filename;

  var sql = `UPDATE company SET companyPhoto3 = "${filePath}" WHERE companyId = ${req.body.companyId}`

  conn.queryAsync(sql).then((result)=>{
    
    res.json(result)
  })
})

//photo4
router.post('/chcompanyphoto4',uploadCompPto.array('file'),function(req,res,next){
  
  var filePath = req.files[0].filename;

  var sql = `UPDATE company SET companyPhoto4 = "${filePath}" WHERE companyId = ${req.body.companyId}`

  conn.queryAsync(sql).then((result)=>{
    
    res.json(result)
  })
})

//photo5
router.post('/chcompanyphoto5',uploadCompPto.array('file'),function(req,res,next){
  
  var filePath = req.files[0].filename;

  var sql = `UPDATE company SET companyPhoto5 = "${filePath}" WHERE companyId = ${req.body.companyId}`

  conn.queryAsync(sql).then((result)=>{
    
    res.json(result)
  })
})


module.exports = router;
