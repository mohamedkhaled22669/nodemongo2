const express = require("express");
const router = express.Router();
const Event = require("../models/Evnet");

//route to home events
router.get('/', (req,res)=> {

    
res.render("event/index")
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
