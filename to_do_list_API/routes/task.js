const express = require("express")
const taskSchema = require("../models/taskModel")
const router = express.Router()

// new task
router.post("/task" , (req,res) => {
    const task = taskSchema(req.body);
    console.log(req.body);
    task.save().
    then((data) => res.json(data))
    .catch((error) => res.json({message: "error al agregar"}));
})

//get all tasks
router.get("/task" , (req,res) => {

    taskSchema.find().
    then((data) => res.json(data))
    .catch((error) => res.json({message: "error al agregar"}));
})

//get one task
router.get("/task/:id" , (req,res) => {
    const {id} = req.params;
    
    taskSchema.findById(id).
    then((data) => res.json(data))
    .catch((error) => res.json({message: "error al agregar"}));
})

//update one task
router.put("/task/:id" , (req,res) => {
    const {id} = req.params;
    const {description,isDone} = req.body
    taskSchema.updateOne({_id: id}, {$set:{description,isDone}}).
    then((data) => res.json(data))
    .catch((error) => res.json({message: "error al agregar"}));
})

//delete one task
router.delete("/task/:id" , (req,res) => {
    const {id} = req.params;
    taskSchema.remove({_id: id}).
    then((data) => res.json(data))
    .catch((error) => res.json({message: "error al agregar"}));
})
module.exports = router