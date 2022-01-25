const express = require('express'),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
  host: 'tea-shop-inventory.clytprcklf67.us-east-2.rds.amazonaws.com',
  user: 'Tea_Shop1',
  password: 'lc101Project',
  database: 'tea_database1'
})

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// routers
const teaRouter = require('./routes/tea');

// use the modules
app.use(cors())
app.use(bodyParser.json());

// use router
app.use('/tea', teaRouter);
app.get('/', function(req, res, next) {
    res.send("Hello world");
});

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));