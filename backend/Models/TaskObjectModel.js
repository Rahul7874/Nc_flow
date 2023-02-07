import mongoose from 'mongoose'

const TaskObjectSchema = mongoose.Schema({

    Id: { type: String,unique:true},
    Issue:{type:String},
    Resolutionowner: { type: String},
    ResolutionownerId: { type: String},
    RCAValidator: { type: String},
    RCAValidatorId: { type: String},
    Finalapprover: { type: String},
    FinalapproverId: { type: String},
    Creator: { type: String},
    CreatorId: { type: String },
    created: {
        type: Date,
    },
    AssignedDate: {
        type: Date,
    },
    CompletionDate: {
        type: Date,
    },
    CreatorStatus: { type: String},
    ROStatus: { type: String},
    ValidatorStatus: { type: String},
    ApproverStatus: { type: String},
    CreatorComment: { type: String},
    ROComment: { type: String},
    ValidatorComment: { type: String},
    ApproverComment: { type: String}
})

const taskObjectData = mongoose.model("taskobject", TaskObjectSchema)

export default taskObjectData