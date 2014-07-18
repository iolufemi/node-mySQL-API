/* GET home page. */
var app = require('../app');
app.set('table','users');
var users = require('../mysql');
var usersModel = app.get('mySQLModel');

app.get("/",function(req,res){
    //res.render('index',{title: "Femi's App"});
    res.send(200,usersModel.create({name:"adel"}));
});