var express = require('express');
var router = express.Router();


    
    
router.get('/', async function(req, res, next) {

    
    var data = await req.mysql.queryAsync("select * from job where jobId = 1", []);
    console.log(data);
    res.render("testdatabase",{result:JSON.stringify(data)}) 
});

    
router.post('/', async function(req, res, next) {
    // let a = {a:1};
    // console.log(req.body);
    // res.JSON(req.body);
    
    var result = await req.mysql.queryAsync(`select cityName from citylist where cityId = ${req.body.dataToSever}`, []);
    var result2 = JSON.stringify(result);
    console.log(result);
    res.json(result);
});





module.exports = router;