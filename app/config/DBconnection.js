var mysql = require("mysql")
var fs = require("fs")
require('dotenv').config()

// var seedQuery = fs.readFileSync("iceCreamSeeds.sql",{
//     encoding: "utf-8"
// })

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "chirpy_db"

})

connection.connect(function(err){
    if (err) throw err;
    
    console.log("connected as id " + connection.threadId)
})

module.exports = connection;
