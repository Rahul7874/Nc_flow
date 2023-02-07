import express from 'express'
import {getTask,taskSingle,PostTask} from '../Controller/TaskController.js'


const taskRoute = express.Router()

// read router
taskRoute.get('/getalltask',getTask)

taskRoute.get('/task/:id',taskSingle)

//post task
taskRoute.post("/posttask",PostTask)

export default taskRoute