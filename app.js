const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = process.env.PORT || 5000;




//bring ejs Template
app.set('view engine', 'ejs')


//bring statc
app.use(express.static("public"));
app.use(express.static('node_modules'));
// connect to database



app.get('/', (req,res)=> {

    res.redirect('/events');

});



//bringg events routers
const events = require('./routes/event-routes');
app.use('/events' , events)

app.listen(PORT, ()=> {

    console.log(`this is working.....port ${PORT}`);
});