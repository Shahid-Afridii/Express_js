 var express=require("express");
 var app=express();
 var alert=require("alert");
const router = require("../routing/route");
const { error } = require("console");

//middleware
 router.use(function(req,res,next){
     alert("welcome");
     console.log("Request method:",req.method,"and",req.url,"URL address page is running");
     next();
 });

 //mainpage
 app.get("/",function(req,res,next){
     console.log("Main page");
     res.end("Lets go to the Home page");
 });

 app.get("/shahid",function(req,res,next){
    console.log("First page");
    res.end("Welcome to the router middleware first page");
});

router.get("/second",function(req,res,next){
    console.log("second page");
    res.end("Welcome to the router middleware second page");
    next();
});

router.get("/third",function(req,res,next){
    console.log("Third page");
    res.end("Welcome to the router middleware third page");
    next();
});

app.use("/shahid",router);

//error handling middleware

app.get("*",function(req,res,next){
    var err=new error("Page not found");
    next(err);
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send("Page Not found");
    alert("OOPS");
    
});

app.listen(8080,function(req,res){
    console.log("server running on port:8080");

});