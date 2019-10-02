const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    data: {
        type: Data,
        required: true
    },
    create_at: {
        type: Data,
        required: true
    }
});

let Event = mongoose.model('Event', eventSchema, "events2");

module.exports = Event; 