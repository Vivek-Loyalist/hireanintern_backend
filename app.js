var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('./config/connection')
var intern_signup_route = require('./routes/intern_signup_route');
var employer_signup_route = require('./routes/employer_signup_route');
var job_details_route = require('./routes/job_details_route');
var apply_job_route = require('./routes/apply_job_route');


var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/intern', intern_signup_route);

app.use('/employer', employer_signup_route);

app.use('/job', job_details_route);

app.use('/job', apply_job_route);

// this job should be first in the postman request /job/jobdetails

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




module.exports = app;
