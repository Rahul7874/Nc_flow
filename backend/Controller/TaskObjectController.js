import expressAsyncHandler from "express-async-handler";
import taskObjectData from "../Models/TaskObjectModel.js";


export const getTaskObject = expressAsyncHandler(async (req, res) => {
    try {
        const data = await taskObjectData.find({ $or: [{ ResolutionownerId: { '$regex': req.query.searchQ } },{ RCAValidatorId: { '$regex': req.query.searchQ } },{ FinalapproverId: { '$regex': req.query.searchQ } }] })
        if (data) {
            return res.status(200).json({message:true,data})
        }
    } catch (error) {
      return res.status(404).json({message:"No found"})
    }
  })


export const taskSingleObject = expressAsyncHandler(async (req, res) => {
  const singleid = req.params.id
console.log(singleid)
  try {
      const data = await taskObjectData.findById(singleid)
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
export const PostTaskObject = expressAsyncHandler(async (req, res) => {
  const {Id,Issue,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created,AssignedDate,CompletionDate,CreatorStatus,ROStatus,ValidatorStatus,ApproverStatus,CreatorComment,ROComment,ValidatorComment,ApproverComment} = req.body.data
  try {
      const data = await new taskObjectData({ Id,Issue,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created,AssignedDate,CompletionDate,CreatorStatus,ROStatus,ValidatorStatus,ApproverStatus,CreatorComment,ROComment,ValidatorComment,ApproverComment})
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
