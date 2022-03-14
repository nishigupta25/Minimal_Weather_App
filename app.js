const express=require('express');
//As it returns a function
const app=express();
//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
//Import Route
const weatherRoute=require('./routes/weather');
//use view engine
app.set('view engine','ejs');
//Middleware routes
app.use('/',weatherRoute);
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Server starting at port ${port}`));