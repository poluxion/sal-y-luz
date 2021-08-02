const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const middlewares = require('middlewares');

const app=express();

app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../app/views'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

dotenv.config({path: path.join(__dirname,'../env/.envH,.env')})

app.use('/resources', express.static(path.join(__dirname,'../public')));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

module.exports = app;