// CONST 
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const dotenv = require('dotenv');

// MORGAN 
const morgan = require('morgan');
app.use(morgan('combined'));


// HANDLEBAR 
const handlebars  = require('express-handlebars');
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// SASS 
const sass = require('sass');

// STATIC 
app.use(express.static(path.join(__dirname, 'public')));


// MIDDLEWARE 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// START 
const route = require('./routes');
const db = require('./config/db');
route(app);
db.connect();

// GATE 
app.listen((process.env.PORT || 3000), () => {
  console.log(`\ app listening at http://localhost:${port}`)
});