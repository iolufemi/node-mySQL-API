// MySql Connector
// Require MySQL Module
var mysql = exports = require('mysql');
var app = require('../app');

// Connect to MySQL
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});

app.set('mysqlConnection',connection);

// Create Database
connection.query('CREATE DATABASE IF NOT EXISTS '+app.get("appName"),function(err){
    if(err){
      throw err;  
    }else{
        console.log('database created');
    }
});

//add the model
require('./model');