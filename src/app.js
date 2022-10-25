 const express = require('express');
 const path = require('path');
 const hbs = require('hbs');
 const app = express();
 const port = process.env.PORT || 8000;

 //----staic path of core folder---------//

 //console.log(path.join(__dirname,"../public"));
 const static_path= path.join(__dirname,"../public");
 const template_path= path.join(__dirname,"../templates/views"); 
 const partial_path= path.join(__dirname,"../templates/partial"); 

 //express handel bar
 app.set("view engine",'hbs');
 app.set('views',template_path);
 hbs.registerPartials(partial_path);
 
 //express allow us to display view file using express.static() (add public folder css,js path too)
 app.use(express.static(static_path));

 
//app.get(route,callbacl);
app.get("", (req,res) => {
    //res.send("welcome to my website");
    res.render('index')
});

app.get("/about", (req,res) => {
    //res.send("welcome to my website ,about");
    res.render('about')
});

app.get("/weather", (req,res) => {
    res.render("weather");
});

app.get("*", (req,res) => {
    res.render("error",{
        errorMsg:"Woops, Looks like this page doesn't exit."
    });
});


app.listen(port, () => {
    console.log(`listing at ${port}`)
})