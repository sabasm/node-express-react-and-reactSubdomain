var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var vhost = require('vhost');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(vhost('dashboard.localhost', require('./dashboard/app')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static('public'));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public','index.html'))
})

module.exports = app;
