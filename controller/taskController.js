const Task = require('../models/task') ;


// get all tasks
const getAllTasks = async (req, res) =>{
    try {
        const tasks = await Task.find();
        res.status(200).json({ success: true, tasks})
    } catch (error) {
        res.json(error)
    }
};


// get task
const getTask = async (req, res) =>{
    const {taskId} = req.params
    try {
       const task = await Task.findById({_id: taskId}); 
       res.status(200).json({ success: true, task});
    } catch (error) {
        res.json(error)
    }
};


// create task
const createTask = async (req, res) =>{
    const { title, description, tag } = req.body 
    console.log(req.body);

    if(!title || !description || !tag){
        return res.status(400).json({success: false, mesaage: 'Please fill all the input fields'})
    }
    try {
       const task = await Task.create({...req.body})
       
       res.status(201).json({success: true, task})
    } catch (error) {
        res.json(error)
    }
}

// update a goal
const updateTask = async (req, res)=>{
    const { taskId } = req.params;
    try {
        const task = await Task.findByIdAndUpdate({_id: taskId}, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ success: true, goal});
    } catch (error) {
        res.json(error)
    }
};

// delete goal
const deleteTask = async (req, res)=>{
    const { taskId } = req.params;
    try {
       const task = await Task.findByIdAndDelete({_id: taskId});
       res.status(200).json({ success: true}); 
    } catch (error) {
       res.json(error) 
    }
};


module.exports = { getTask, getAllTasks, createTask, updateTask, deleteTask}