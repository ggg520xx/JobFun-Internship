var express = require('express');
var router = express.Router();


router.get('/', async function(req, res, next) {
  res.render('pay2', { title: 'pay2'});
});


module.exports = router;
