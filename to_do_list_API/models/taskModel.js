const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    description: {
        type: String,
    },
    isDone:{
        type:Boolean,
    }
})

module.exports =  mongoose.model('Task',taskSchema)