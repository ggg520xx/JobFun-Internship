var express = require('express');
var router = express.Router();
const conn = require('../dbconncet')
var url = require("url");
var fs = require('fs');


router.get('/', async function(req, res, next) {

  var cityListResult;
  var jobClassResult;
  var townsListResult;
  var searchResult;
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
      return conn.queryAsync(`select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on" ORDER BY job.jobAddtime DESC
`)
     
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"isearch",
                          sessionUserName:req.session.userName,
                          sessionUserCharacter:req.session.userCharacter,
                          sessinoUserMemberName:req.session.userMemberName,
                          cityList:cityListResult,
                          jobClassList:jobClassResult,
                          townsList:townsListResult,
                          searchList:searchResult
                          })
    }
  )

});




module.exports = router;
