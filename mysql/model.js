// Model
var app = require('../app');

var connection = app.get('mysqlConnection');
// Create Table
connection.query('USE '+app.get('appName'),function(err){
   if(err){
        throw err;
    }else{
        connection.query('CREATE TABLE IF NOT EXISTS `'+app.get('table')+'`('
        +'`id` INT NOT NULL AUTO_INCREMENT,'
        +'PRIMARY KEY(`id`),'
        +'`name` VARCHAR(30)'
        +')',function(err){
            if(err){
                throw err;
            }else{
                console.log('table created');
            }
        });
    } 
});

// Create an object of most common database operations
var model = {
connection:connection,
create: function(data){
    this.connection.query('INSERT INTO `'+app.get('table')+'` SET ?', data, function(err,row){
        if(err){
            throw err;
        }else{
            return row;
        }
    });
},
read:"",
update:"",
delete:"",
search:""
}

// Store the Object globally
app.set('mySQLModel',model);

/*ToDo

get, order by, assending order or desending order, with limit, offset, where id is, where custom is customvalue, where like, where custom is customvalue with limit


insert

update with id, update where custom is customvalue

delete with id

count, count where

custom query

Security for access control

Create table dynamically
*/