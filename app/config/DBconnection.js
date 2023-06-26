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
    database: "ice_creamDB"

})

connection.connect(function(err){
    if (err) throw err;
    console.log("connectd as id " + connection.threadId + "\n")
    afterConnection();
})




function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }

