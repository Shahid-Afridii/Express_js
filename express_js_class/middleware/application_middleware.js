var express=require("express");
var app=express();
var alert=require("alert");

app.use(function(req,res,next){
    alert("welcome to middleware");
    console.log("Request method:",req.method,"and",req.url,"URL address page is running");
    next();

});

app.get("/",function(req,res,next){
    console.log("First Page");
    res.send("welcome to middleware coding");
    next();

});
app.get("/exit",function(req,res,next){
    console.log("Second Page");
    res.send("welcome to second middleware coding");
    next();

});

app.use(function(req,res){
    alert("The end");
    console.log("The end");

});
app.listen(8080,function(req,res){
    console.log("Server is running on port:8080");

})