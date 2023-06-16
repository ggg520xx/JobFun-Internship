var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var es = require("express-session");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var searchResulthRouter = require('./routes/searchresult');
var jobRouter = require('./routes/job');
var testdatabaseRouter = require('./routes/testdatabase');
var companyRouter = require('./routes/company');
var memberRouter = require('./routes/member');
var pay1Router = require('./routes/pay1');
var pay2Router = require('./routes/pay2');
var signincompanyRouter = require('./routes/signincompany');
var signinstudentRouter = require('./routes/signinstudent');
var signupcompanyRouter = require('./routes/signupcompany');
var signupstudentRouter = require('./routes/signupstudent');
var signoutRouter = require('./routes/signout');
var adminRouter = require('./routes/admin');
var adminsigninRouter = require('./routes/adminsignin');
var aboutRouter = require('./routes/about');
var companyintroRouter = require('./routes/companyintro');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb', extended: true}));
//db setup
// app.use(function (req, res, next) {
//   var mysql = require("mysql");
//   var conn = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "jobfun"
//   });

//   conn.connect();
//   req.mysql = conn;
//   req.mysql.queryAsync = function (cmd, params) {
//       return new Promise(function (resolve, reject) {
//         req.mysql.query(cmd, params, function (err, data) {
//           resolve(data);
//         })
//       });
//   }
//   next();
// })



//session setup
app.use(es({
  secret:"passw0rd",
  resave: true,
  saveUninitialized: false, // 是否儲存未初始化的會話
  cookie: {
    maxAge: 90*60*1000
  }  
}))
app.use(function(req, res, next){
    if(!req.session.userName){
        req.session.userName = "Guest";
    }
    if(!req.session.userCharacter){
      req.session.userCharacter = "Guest";
    } 
    if(!req.session.userId){
      req.session.userId= "Guest";
    } 
    if(!req.session.userMemberName){
      req.session.userId= "Guest";
    } 
    next();
})




//
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/searchresult', searchResulthRouter);
app.use('/job', jobRouter);
app.use('/testdatabase', testdatabaseRouter);
app.use('/company', companyRouter);
app.use('/member', memberRouter);
app.use('/pay1', pay1Router);
app.use('/pay2', pay2Router);
app.use('/signincompany', signincompanyRouter);
app.use('/signinstudent', signinstudentRouter);
app.use('/signupcompany', signupcompanyRouter);
app.use('/signupstudent', signupstudentRouter);
app.use('/signout', signoutRouter);
app.use('/admin', adminRouter);
app.use('/adminsignin', adminsigninRouter);
app.use('/about', aboutRouter);
app.use('/companyintro', companyintroRouter);
// app.use('/search/result?keyWord=&area=&jobClass=', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post(function(req, res, next){
    next();
});

module.exports = app;
