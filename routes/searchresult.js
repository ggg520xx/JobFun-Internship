var express = require('express');
var router = express.Router();
const conn = require('../dbconncet')
var url = require("url");
var fs = require('fs');


router.get('/',function(req, res, next){

  
  var result = url.parse(req.url,true)
  
  var keyWord = result.query.keyWord;
  var area = result.query.area;
  var jobClass = result.query.jobClass;
  
  

  if ((keyWord == "" && area == "") && jobClass == "") {
  // X X X
  res.redirect("/search")
//   var cityListResult;
//   var jobClassResult;
//   var townsListResult;
//   var searchResult;
//   conn.queryAsync(`select * from citylist `).then(
//     (result)=>{
//       cityListResult = result;
//       return conn.queryAsync(`select * from jobclass`)
//     }
//   ).then(
//     (result)=>{
//       jobClassResult = result;
//       return conn.queryAsync(` SELECT townlist.* , citylist.cityName from townlist as townlist join citylist as citylist ON townlist.cityId = citylist.cityId`)
//     }
//   ).then(
//     (result)=>{
//       townsListResult = result;
//       return conn.queryAsync(`select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on" ORDER BY job.jobAddtime DESC
// `   )
     
//     }
//   ).then(
//     (result)=>{
//        searchResult = result;
       
//        res.render('search',{title:"searchResult",
//                           sessionUserName:req.session.userName,
//                           sessionUserCharacter:req.session.userCharacter,
//                           cityList:cityListResult,
//                           jobClassList:jobClassResult,
//                           townsList:townsListResult,
//                           searchList:searchResult
//                           })
//     }
//   )
  }else if ((keyWord != "" && area == "") && jobClass == "") {
      //V X X
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
      return conn.queryAsync(`select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on" and job.jobName like ? ORDER BY job.jobAddtime DESC
`,[`%${keyWord}%`]   )
     
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"searchResult",
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
  }else if((keyWord == "" && area != "") && jobClass == ""){
      //X V X 
      var addCondition = "";
      var aeraList = area.split(",");
      aeraList.forEach(e => {
        addCondition += `townlist.townshipId = ${e} or `
        
      });
      console.log(aeraList);
      var finalCondition = "";
      finalCondition = "and " + `${addCondition}`;
      var fCondition =  finalCondition.slice(0,(finalCondition.length-3)) 

      var sql = `select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on"  ${fCondition} ORDER BY job.jobAddtime DESC`
      
      
      
      
      
      
      
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
      return conn.queryAsync(sql)
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"searchResult",
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
  }else if((keyWord == "" && area == "") && jobClass != ""){
      // X X V
      var addCondition = "";
      var  jobClassList = jobClass.split(",");
       jobClassList.forEach(e => {
        addCondition += `jobclass.jobClassId = ${e} or `
        
      });
      
      var finalCondition = "";
      finalCondition = "and " + `${addCondition}`;
      var fCondition =  finalCondition.slice(0,(finalCondition.length-3))
      

     var sql = `select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on"  ${fCondition} ORDER BY job.jobAddtime DESC`
      
      
      
      
      
      
      
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
      return conn.queryAsync(sql)
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"searchResult",
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

  }else if((keyWord != "" && area != "") && jobClass == ""){
     // V V X 
     var keyWordValue = `and job.jobName like "%${keyWord}%" and ( `;
     
     var addCondition = "";
     var aeraList = area.split(",");
      aeraList.forEach(e => {
        addCondition += `townlist.townshipId = ${e} or ` 
      });
      var finalCondition = `${keyWordValue} ${addCondition}`
      var fConditionPre =  finalCondition.slice(0,(finalCondition.length-3))
      var fCondition = `${fConditionPre} )`
     console.log(fCondition);

      var sql = `select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on"  ${fCondition} ORDER BY job.jobAddtime DESC`
    
        
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
      return conn.queryAsync(sql)
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"searchResult",
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

  }else if ((keyWord != "" && area == "") && jobClass != ""){
      //V X V
      var keyWordValue = `and job.jobName like "%${keyWord}%" and ( `;
     
     var addCondition = "";
     var jobClassList = jobClass.split(",");
      jobClassList.forEach(e => {
        addCondition += `jobClass.jobClassId = ${e} or ` 
      });
      var finalCondition = `${keyWordValue} ${addCondition}`
      var fConditionPre =  finalCondition.slice(0,(finalCondition.length-3))
      var fCondition = `${fConditionPre} )`

    
      var sql = `select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on"  ${fCondition} ORDER BY job.jobAddtime DESC`
    
        
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
      return conn.queryAsync(sql)
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"searchResult",
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

  }else if((keyWord == "" && area != "") && jobClass != ""){
      //X V V
      var aeraCondition = "";
       var areaList = area.split(",");
      areaList.forEach(e => {
        aeraCondition += `townlist.townshipId = ${e} or ` 
      });
      

      var jobClassCondition = "";
       var jobClassList = jobClass.split(",");
      jobClassList.forEach(e => {
        jobClassCondition += `jobClass.jobClassId = ${e} or ` 
      });
      

      var finalConditionAreaPre = aeraCondition.slice(0,(aeraCondition.length-3))
      


      var finalConditionjobClassPre = jobClassCondition.slice(0,(jobClassCondition.length-3))
      
      var fCondition = ` and ( ${finalConditionAreaPre} ) and ( ${finalConditionjobClassPre} )`
      
        
      var sql = `select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on"  ${fCondition} ORDER BY job.jobAddtime DESC`
    
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
      return conn.queryAsync(sql)
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"searchResult",
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
  }else if ((keyWord != "" && area != "") && jobClass != ""){
      // V V V
    var keyWordValue = `and job.jobName like "%${keyWord}%"  `;
    


    var aeraCondition = "";
       var areaList = area.split(",");
      areaList.forEach(e => {
        aeraCondition += `townlist.townshipId = ${e} or ` 
      });
      

      var jobClassCondition = "";
       var jobClassList = jobClass.split(",");
      jobClassList.forEach(e => {
        jobClassCondition += `jobClass.jobClassId = ${e} or ` 
      });
      

      var finalConditionAreaPre = aeraCondition.slice(0,(aeraCondition.length-3))
      


      var finalConditionjobClassPre = jobClassCondition.slice(0,(jobClassCondition.length-3))
      
      var fCondition = ` ${keyWordValue} and ( ${finalConditionAreaPre} ) and ( ${finalConditionjobClassPre} )`
    

     var sql = `select job.jobId, job.jobName, DATE_FORMAT(job.jobAddtime, "%Y-%m-%d") as jobAddtime ,townlist.townshipName,citylist.cityName,company.companyName ,jobclass.jobClassName from job as job join townlist as townlist on job.jobAera = townlist.townshipId join citylist as citylist on townlist.cityId = citylist.cityId join company as company on job.companyId = company.companyId join jobclass as jobclass on job.jobClassId = jobclass.jobClassId WHERE job.jobStatus = "on"  ${fCondition} ORDER BY job.jobAddtime DESC`
    
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
      return conn.queryAsync(sql)
    }
  ).then(
    (result)=>{
       searchResult = result;
       
       res.render('search',{title:"searchResult",
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


  }


});



module.exports = router;
