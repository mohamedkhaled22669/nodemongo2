const express = require("express");
const router = express.Router();
const Event = require("../models/Evnet");

//route to home events
router.get('/', (req,res)=> {

    Event.find({}, (err,events)=> {

        let chunk = [];
        let chunkSize = 3;
        for (let i = 0; i < events.length; i+= chunkSize) {
            chunk.push(events.slice (i, chunkSize + i));             
        }

        res.render("event/index", {
            chunk : chunk
        })

    })

});

// show single event
router.get('/:id',(req,res)=> {

    Event.findOne({_id: req.params.id},(err,event) => {

        if (!err) {
            res.render('event/show', {

                event : event
            })
        }else{
            console.log(err);
        }
    })

})

module.exports = router;