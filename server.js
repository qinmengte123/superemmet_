var express = require("express");
var app = express();

app.use(express.static("public"));
app.get("/",function (req,res) {
   res.send("hello");
});
app.get("/user",function (req,res) {
    res.send("user is name");
});
var server = app.listen(4141,"0.0.0.0",function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("运行:",host,port);
});
/*app.listen(4141,"0.0.0.0");*/
