import express from 'express'
import {getTask,taskSingle,PostTask,PatchROtask} from '../Controller/TaskController.js'


const taskRoute = express.Router()

// read router
taskRoute.get('/getalltask',getTask)

taskRoute.get('/task/:id',taskSingle)

//post task
taskRoute.post("/posttask",PostTask)

taskRoute.put("/tasku",PatchROtask)



export default taskRoute