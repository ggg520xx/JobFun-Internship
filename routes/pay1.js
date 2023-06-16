var express = require('express');
var router = express.Router();


router.get('/', async function(req, res, next) {
  res.render('pay1', { title: 'pay1'});
});


module.exports = router;
