const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/events2DB' ||'mongodb://username:password@host:port/database?options...',
{useNewUrlParser: true , useUnifiedTopology: true } , 
(err) => {
    
    if (err) {
        
        console.log(err)
    }else{
        console.log('connected to db succesfuly...')
    }
});