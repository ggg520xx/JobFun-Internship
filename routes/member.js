var express = require('express');
var router = express.Router();
const conn = require('../dbconncet')
const multer = require('multer');



var inStorage = multer.diskStorage({
    destination:function (req, res, cb) {
        cb(null,"./public/img/memberavatar");  //自定保存路徑
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


var inStorageResume = multer.diskStorage({
    destination:function (req, res, cb) {
        cb(null,"./public/resumepdf");  //自定保存路徑
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // 自定義檔案名稱
    }
});

var uploadResume = multer({
    storage: inStorageResume ,  // 設置 storage
    fileFilter: function (req, file, cb) {  // 檔案過濾
        if (!file.originalname.match(/\.(pdf)$/)) {
            return cb(new Error('Wrong file type'));
        }
        cb(null, true)
    }
});




router.get('/', function(req, res, next) {

  
  var userName = req.session.userName;
  var userCharacter = req.session.userCharacter;
  var userId = req.session.userId;
  
  if (userName == "Guest") {
    res.redirect("/signinstudent")
  }else{

  var sql = `SELECT member.*, school.schoolName, major.majorClass,DATE_FORMAT(member.memberBirth, "%Y-%m-%d") as memberBirthday FROM member as member join school as school on member.schoolId = school.schoolId join major as major on member.majorId = major.majorId where memberAccount = "${userName}"`;
  var memberResult ;

  var randomJobSql = `select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddTime,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on" ORDER BY RAND() LIMIT 6 `
  var randomJobResult ; 

  var selectResume = `select resume.* ,member.memberAccount from resume as resume join member as member on resume.memberId = member.memberId where member.memberAccount =  "${userName}" `
  var resumeResult ; 

  var collectSql = `SELECT collectlist.* ,job.jobName,townlist.townshipName,citylist.cityName, company.companyName FROM collectlist  as collectlist join job as job on collectlist.jobId = job.jobId join townlist as townlist on job.jobAera = townlist.townshipId JOIN citylist as citylist on townlist.cityId = citylist.cityId JOIN company as company on job.companyId = company.companyId WHERE collectlist.memberId = ${req.session.userId}`
  var collectResult;

  var jobApplysql=`select jobapply.*,job.jobName,company.companyName,DATE_FORMAT(jobapply.applyDate, "%Y-%m-%d") as applyDateF from jobapply as jobapply join job as job on jobapply.jobId = job.jobId join company as company on job.companyId = company.companyId where jobapply.memberId = "${userId}"`
  var jobApplyResult ;
  conn.queryAsync(sql).then((result)=>{
    memberResult = result;
    return conn.queryAsync(randomJobSql)
  }).then((result)=>{
    randomJobResult = result;
    return conn.queryAsync(selectResume)
  }).then((result)=>{
    
    resumeResult = result;
    return conn.queryAsync(jobApplysql)
    
  }).then((result)=>{
    
    jobApplyResult = result;
    return conn.queryAsync(collectSql)
    
  }).then((result)=>{

    collectResult = result;

    if(memberResult[0].memberCheck == "nopass"){
       res.redirect("/index")
    }else{
        res.render('member', { 
        title: 'member',
        memberInfo:memberResult,
        randomJob:randomJobResult,
        resume:resumeResult,
        collect:collectResult,
        jobApplyInfo:jobApplyResult
        });   
    }
  })

  }


});

router.post('/chavatar',upload.array('file'),function(req,res,next){
  
  var filePath = req.files[0].filename;

  var sql = `UPDATE member SET memberAvatar = "${filePath}" WHERE memberId = ${req.body.stMemberId}`

  conn.queryAsync(sql).then((result)=>{
    console.log(result);
    res.json(result)
  })
})


router.post('/addresume',uploadResume.array('file'),function(req, res, next){
  var filePath = req.files[0].filename;
  var userName = req.session.userName;
  var sql = `insert into resume (memberId,resumeName,resumeEmail,resumePhone,resumeSkill,resumeFile) values(${req.body.stMemberId},"${req.body.stResumeName}","${req.body.stResumeEmail}","${req.body.stResumePhone}","${req.body.stResumeSkill}","${filePath}")`
  var sqlUpdatedResume = `select resume.* ,member.memberAccount from resume as resume join member as member on resume.memberId = member.memberId where member.memberAccount = "${userName}"`
  conn.queryAsync(sql).then((result)=>{
    return conn.queryAsync(sqlUpdatedResume)
  }).then((result)=>{
    res.json(result)
  })

})

router.post('/editresume',function(req, res, next){
  
  var sql = `select * from resume where resumeId = ${req.body.resume}`
  var selectEditResumt;
  conn.queryAsync(sql).then((result)=>{
     selectEditResumt = result;
     res.json(selectEditResumt);
  })
})


router.post('/editresumehavepdf',uploadResume.array('file'),function(req, res, next){
  var filePath = req.files[0].filename;
  var userName = req.session.userName;
  
  var sql = `update resume set resumeName = "${req.body.stResumeName}", resumeEmail = "${req.body.stResumeEmail}", resumePhone = "${req.body.stResumePhone}", resumeSkill = "${req.body.stResumeSkill}",resumeFile = "${filePath}" where resumeId = "${req.body.stResumeId}"`
  var sqlUpdatedResume = `select resume.* ,member.memberAccount from resume as resume join member as member on resume.memberId = member.memberId where member.memberAccount = "${userName}"`
  conn.queryAsync(sql).then((result)=>{
    return conn.queryAsync(sqlUpdatedResume)
  }).then((result)=>{
    res.json(result)
  })

})

router.post('/editresumenopdf',function(req, res, next){
  var userName = req.session.userName;
  var sql = `update resume set resumeName = "${req.body.resumeName}", resumeEmail = "${req.body.resumeEmail}", resumePhone = "${req.body.resumePhone}", resumeSkill = "${req.body.resumeSkill}" where resumeId = "${req.body.resumeId}"`
  var sqlUpdatedResume = `select resume.* ,member.memberAccount from resume as resume join member as member on resume.memberId = member.memberId where member.memberAccount = "${userName}"`
  conn.queryAsync(sql).then((result)=>{
     return conn.queryAsync(sqlUpdatedResume)
  }).then((result)=>{

    res.json(result)
  })

})

router.post('/delresume',function(req, res, next){
  var userName = req.session.userName;
  var sql = `DELETE FROM resume WHERE resumeId= ${req.body.resumeId}`
  var sqlBackResume =`select resume.* ,member.memberAccount from resume as resume join member as member on resume.memberId = member.memberId where member.memberAccount = "${userName}"`
  conn.queryAsync(sql).then((result)=>{
    return conn.queryAsync(sqlBackResume) 
  }).then((result)=>{
    res.json(result)
  })

})

router.post('/companyreply',function(req,res,next){
  console.log(req.body.jobApplyId);
  console.log(req.body.memberId);
  var replySql = `select jobapply.*,job.jobName,company.companyName,DATE_FORMAT(jobapply.applyDate, "%Y-%m-%d") as applyDateF from jobapply as jobapply join job as job on jobapply.jobId = job.jobId join company as company on job.companyId = company.companyId where jobapply.jobAppyId = "${req.body.jobApplyId}"`
  conn.queryAsync(replySql).then((result)=>{
    res.json(result)
  })

})

router.post('/editinfo',function(req, res, next){
  var memberId = req.body.editMemberId
  var memberPassword = req.body.editPassword
  var memberEmail = req.body.editEmail
  var memberPhone = req.body.editPhone
  
  var editInfoSql = `update member set memberPassword = "${memberPassword}", memberEmail= "${memberEmail}", memberPhone="${memberPhone}" where memberId = "${memberId}"`
  conn.queryAsync(editInfoSql).then((result)=>{
    res.json(result)
  })
})

router.post('/delcollect',function(req,res,next){
  var delCollectSql = `DELETE FROM collectlist WHERE collcetId ="${req.body.collectId}"`
  
  var updatedCollect = `SELECT collectlist.* ,job.jobName,townlist.townshipName,citylist.cityName, company.companyName FROM collectlist  as collectlist join job as job on collectlist.jobId = job.jobId join townlist as townlist on job.jobAera = townlist.townshipId JOIN citylist as citylist on townlist.cityId = citylist.cityId JOIN company as company on job.companyId = company.companyId WHERE collectlist.memberId = ${req.session.userId}`
  
  conn.queryAsync(delCollectSql).then((result)=>{
    return conn.queryAsync(updatedCollect)
  }).then((result)=>{
    res.json(result)
  })

})


module.exports = router;
