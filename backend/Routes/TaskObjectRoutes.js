import express from 'express'
import {getTaskObject,taskSingleObject,PostTaskObject} from '../Controller/TaskObjectController.js'


const taskObjectRoute = express.Router()

// read router
taskObjectRoute.get('/getalltaskobject',getTaskObject)

taskObjectRoute.get('/taskobject/:id',taskSingleObject)

//post task
taskObjectRoute.post("/posttaskobject",PostTaskObject)

export default taskObjectRoute