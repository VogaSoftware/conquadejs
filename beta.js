var express = require('express'); // Grab the web server content
var path = require('path'); // Grab the path management content
var favicon = require('serve-favicon'); // Favicon clip-on
var logger = require('morgan'); // I forgot what morgon does.
var cookieParser = require('cookie-parser'); // Cookies! YUM!
varCC:

// app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));
s
app.use('/', routes);
app.use('/users', users);

// view engine setup
app.set('views', path.join(__dirname, 'beta-views'));
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
