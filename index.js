require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors')
const taskRouter = require('./routes/taskRouter')


// middelware
app.use(express.json());
app.use(cors());


// routes
app.use('/api/tasks', taskRouter);


// db connection

const start = async () => {
    try {
     mongoose.connect(process.env.MONGO_URI)
     app.listen(port, () => {
         console.log(`your server listening on port ${port}`);
         });
    } catch (error) {
     console.log(error);
    }
 };
 start()
 
 app.use((req, res) => {
     res.status(404).send("Resource Not Found")
 });