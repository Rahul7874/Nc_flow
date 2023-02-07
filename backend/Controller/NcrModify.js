import expressAsyncHandler from "express-async-handler";

import NcrModify from "../Models/NcrModifyModel.js";

//post request for ncr modify
export const PostNcrModify = expressAsyncHandler(async (req, res) => {
    const {Id,Type,Problem,ProcessStage,PartNo,ReworkHrs,Issue,FailureType,RCA,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created} = req.body.data
    try {
        const data = await new NcrModify({ Id,Type,Problem,ProcessStage,PartNo,ReworkHrs,Issue,FailureType,RCA,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created})
        if (data) {
            await data.save((error, response) => {
                if (error) {
                    return res.status(400).json({message:"Error to create",error})
                }
                if (response) {
                    return res.status(201).json({message:"NCR Modify Data Created Successfully",data})
                }
            })
        }
    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }
})


