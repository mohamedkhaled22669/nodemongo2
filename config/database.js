const mongoose = require("mongoose");

mongoose.connect( 'mongodb://user:01140305151@ds229118.mlab.com:29118/heroku_pcbrk11v' ||'mongodb://localhost:27017/eventsDB',
{useNewUrlParser: true , useUnifiedTopology: true } , 
(err) => {
    
    if (err) {
        
        console.log(err)
    }else{
        console.log('connected to db succesfuly...')
    }
});