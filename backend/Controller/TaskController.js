import expressAsyncHandler from "express-async-handler";
import taskData from "../Models/TaskModel.js";

// read roles

export const getTask = expressAsyncHandler(async (req, res) => {
    try {
        const data = await taskData.find({ $or: [{ ResolutionownerId: { '$regex': req.query.searchQ } },{ RCAValidatorId: { '$regex': req.query.searchQ } },{ FinalapproverId: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:true,data})
        }
    } catch (error) {
      return res.status(404).json({message:"No found"})
    }
  })

  // single user Data

export const taskSingle = expressAsyncHandler(async (req, res) => {
  const singleid = req.params.id
console.log(singleid)
  try {
      const data = await taskData.findById(singleid)
      if (data) {
        return  res.status(200).json({message:"successfully found single task",data})
      }
      return   res.status(400).json({message:"No id found"})
         
  }
  catch (error) {
      res.status(500).json({error})
  }
})

// post request for ncr modify
export const PostTask = expressAsyncHandler(async (req, res) => {
  const {Id,Type,Problem,ProcessStage,PartNo,ReworkHrs,Issue,FailureType,RCA,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created,ContainmentAction,Causes,RootCause,VerifiedCause,IssueCatogorization,SolutionIdentified,CreatorStatus,ROStatus,ValidatorStatus,ApproverStatus} = req.body.data
  try {
      const data = await new taskData({ Id,Type,Problem,ProcessStage,PartNo,ReworkHrs,Issue,FailureType,RCA,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created,ContainmentAction,Causes,RootCause,VerifiedCause,IssueCatogorization,SolutionIdentified,CreatorStatus,ROStatus,ValidatorStatus,ApproverStatus})
      if (data) {
          await data.save((error, response) => {
              if (error) {
                  return res.status(400).json({message:"Error to create",error})
              }
              if (response) {
                  return res.status(201).json({message:"Task Data Created Successfully",data})
              }
          })
      }
  } catch (error) {
      res.status(500).json({message:"internal server error",error})
  }
})
