var express = require("express");

var app =  express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var path = require("path")

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/index.html"))
  });

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})
