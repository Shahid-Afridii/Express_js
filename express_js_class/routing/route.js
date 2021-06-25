var express=require("Express");
var router=express.Router();

router.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

})


router.get("/youtube",function(req,res){
    res.redirect("https://www.youtube.com/watch?v=LYwSA2LkBbY");

});


router.get("/blog",function(req,res){
    res.redirect("https://vjtechnowizard.blogspot.com");

});


router.get("/instagram",function(req,res){
    res.redirect("https://www.intsagram.com/shahidafridi.js");

});
module.exports=router;