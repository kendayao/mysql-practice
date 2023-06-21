var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    password: "dayaoken889@",
    database: "ice_creamDB"

})

connection.connect(function(err){
    if (err) throw err;
    console.log("connectd as id " + connection.threadId + "\n")
})