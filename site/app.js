const createError = require('http-errors');
const express = require('express');
/*const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');*/

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { use } = require('./routes/index');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, (req, res) =>{
  console.log('Servidor online! http://localhost:3000')
  
});

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/productos', (req, res)=>{
  res.sendFile(__dirname + '/views/productDetail.html')
});

app.get('/login', (req, res)=>{
  res.sendFile(__dirname + '/views/login.html')
});

app.get('/registro', (req, res)=>{
  res.sendFile(__dirname + '/views/form_registro.html')
});

app.get('/recup_pass', (req, res)=>{
  res.sendFile(__dirname + '/views/recuperar_pass.html')
});

/*

app.use(indexRouter);
*/


/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
*/
