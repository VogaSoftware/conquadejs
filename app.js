var express = require('express'); // Grab the web server content
var path = require('path'); // Grab the path management content
var favicon = require('serve-favicon'); // Favicon clip-on
var logger = require('morgan'); // I forgot what morgon does.
var cookieParser = require('cookie-parser'); // Cookies! YUM!
var bodyParser = require('body-parser'); // HTML body parser... need I say more?

var routes = require('./routes/index'); // Internal content index =D
var users = require('./routes/users'); // Users index, its really crippled.

var app = express(); // Identify app info.

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Views (JADE/PUG CONTENT)
app.set('view engine', 'jade'); // Thats just setting Jade (LEGACY) as the engine.


// app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));

app.use('/', routes);
app.use('/users', users);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
