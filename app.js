var express=require('express');
var app=express();

app.use('/styles', express.static('styles'));
app.get("/",function(req,res){
res.render("landing.ejs");
});

app.get("/about",function(req,res){
res.render("about.ejs");
});

app.get("/contact",function(req,res){
	res.render("contact.ejs");
});

app.get("/projects",function(req,res){
	res.render("projects.ejs");
})

app.get("*",function(req,res){
	res.send("Sorry,The requested page is not available!!");
});

app.listen(process.env.PORT || 3000,function(){
	console.log("Server online");
});