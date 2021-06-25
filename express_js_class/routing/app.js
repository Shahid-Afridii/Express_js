var express=require("express");
var app=express();
var routing=require("./route.js");

app.use('/',routing);
app.listen(8080);

