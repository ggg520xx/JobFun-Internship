var express = require('express');
var router = express.Router();
const conn = require('../dbconncet.js');
const multer = require('multer');

//multer setting
var inStorage = multer.diskStorage({
    destination:function (req, res, cb) {
        cb(null,"./public/img/studentcard");  //自定保存路徑
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

router.get('/', function(req, res, next) {
    var sqlCity = `select * from citylist`;
    var sqlMoajorClass = `select * from major`
    var sqlSchool = `SELECT school.*,citylist.cityName FROM school as school join citylist as citylist where school.cityId = citylist.cityId`
    var cityListResult;
    var majorClassResult;
    var schoolResult;

    conn.queryAsync(sqlCity).then(
    (result)=>{
      cityListResult = result;
      return conn.queryAsync(sqlMoajorClass)
    }
  ).then(
    (result)=>{
      majorClassResult = result;
      return conn.queryAsync(sqlSchool)
    }
  ).then(
    (result)=>{
      schoolResult = result;
      res.render('signupstudent',{title:"signupstudent",
                          sessionUserName:req.session.userName,
                          sessionUserCharacter:req.session.userCharacter,
                          cityList:cityListResult,
                          majorClassList:majorClassResult,
                          schoolList:schoolResult
                          })
    }
  )
  
  
});


router.post("/",upload.array('file'),function(req, res, next){
    var frontCardPath = req.files[0].filename;
    var backCardPath = req.files[1].filename;
    var createTime = new Date().Format("yyyy-MM-dd")
    var sqlCheckAccount  = `select * from member where memberAccount = "${req.body.stAccount}"`
    var sqlSignUpStudent = `insert into member(memberAccount, memberPassword, memberName, memberEmail, memberPhone, schoolId, majorId, majorName, studentCardFront, studentCardBack, memberCheck, memberCreateTime ,memberGender , memberBirth ) values("${req.body.stAccount}","${req.body.stPassword}","${req.body.stName}","${req.body.stEmail}","${req.body.stPhone}",${req.body.stSchool},${req.body.stMajorClass},"${req.body.stMajorName}","${frontCardPath}","${backCardPath}","pending","${createTime}","${req.body.stGender}","${req.body.stBirthday}")`
    
    conn.queryAsync(sqlCheckAccount).then((result)=>{
    if (result.length > 0) {
        res.json({signupResult:'same'})
        return
    }else{
        conn.queryAsync(sqlSignUpStudent).then((result)=>{
            res.json({signupResult:'success'})
            return
        })
    }
    
    })

})

module.exports = router;
