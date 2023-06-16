var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    delete req.session.userName;
    delete req.session.userCharacter;
    delete req.session.userId;
    delete req.session.userMemberName;
    res.redirect("/index");
});


module.exports = router;
