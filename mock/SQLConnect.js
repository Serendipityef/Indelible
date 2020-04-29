<<<<<<< HEAD
const mysql = require("mysql");
const MyObject = {
    host:"localhost",
    user:"root",
    password:"",
    database:"ego"
}

const client = mysql.createConnection(MyObject);

function SQLConnect(sql,arr,callback){
    client.query(sql,arr,(error,result)=>{
        if(error){
            console.log(error);
            return;
        }
        callback(result)
    })
}

=======
const mysql = require("mysql");
const MyObject = {
    host:"localhost",
    user:"root",
    password:"",
    database:"ego"
}

const client = mysql.createConnection(MyObject);

function SQLConnect(sql,arr,callback){
    client.query(sql,arr,(error,result)=>{
        if(error){
            console.log(error);
            return;
        }
        callback(result)
    })
}

>>>>>>> 87822c509980302f81671397ac6e0c6d4685f535
module.exports = SQLConnect