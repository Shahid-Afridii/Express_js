var express=require("express");
var app=express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/',function(req,res){
    res.render('index',{
        quotes : "designer can design Everythong Beyond The User Thinking",
        topic : "Mern STACK",
        user : {name : 'shahid'}
    });



});
app.listen(8080,function(req,res){

    console.log("server is running on port:8080");
})