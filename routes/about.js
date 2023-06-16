var express = require('express');
var router = express.Router();
const conn = require('../dbconncet')


router.get('/', function(req, res, next) {


  var cityListResult;
  var jobClassResult;
  var townsListResult;

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
      res.render('about',{title:"about",
                          sessionUserName:req.session.userName,
                          sessionUserCharacter:req.session.userCharacter,
                          cityList:cityListResult,
                          jobClassList:jobClassResult,
                          townsList:townsListResult 
                          })
    }
  )
  
});


module.exports = router;
