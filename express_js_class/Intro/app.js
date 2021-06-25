var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var urlencoded=bodyParser.urlencoded({extended:false})


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")

});

app.post("/home",urlencoded,function(req,res){
    res.send('<h1> weclome:'+req.body.username+"</h1> <h2> Your mail id:"+req.body.mailid+"</h2>");







});

app.listen(8080,function(req,res){
    console.log("Server running on port:8080")



});