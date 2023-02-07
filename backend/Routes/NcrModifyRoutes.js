import express from 'express'

import { PostNcrModify } from '../Controller/NcrModify.js'

const NCRModify = express.Router()

//post request of Ncr creation
NCRModify.post("/postncrmodify",PostNcrModify)

export default NCRModify
