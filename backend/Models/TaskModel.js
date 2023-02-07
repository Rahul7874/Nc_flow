import mongoose from 'mongoose'

const TaskSchema = mongoose.Schema({
    Id: { type: String,unique:true},
    Type: { type: String},
    Problem: { type: String},
    ProcessStage: { type: String},
    PartNo: { type: String},
    ReworkHrs: { type: String},
    Issue: { type: String },
    FailureType: { type: String},
    RCA: {
        type: String,
        enum: ['Yes', 'No'],
    },
    Resolutionowner: { type: String},
    ResolutionownerId: { type: String},
    RCAValidator: { type: String},
    RCAValidatorId: { type: String},
    Finalapprover: { type: String},
    FinalapproverId: { type: String},
    Creator: { type: String},
    CreatorId: { type: String },
    source: {
        file: { type: Buffer },
        filename: { type: String },
        mimetype: { type: String }
    },
    created: {
        type: Date,
    },
    ContainmentAction: { type: String},
    Causes: { type: String},
    RootCause: { type: String},
    VerifiedCause: { type: String},
    IssueCatogorization: { type: String},
    roattachments: {
        file: { type: Buffer },
        filename: { type: String },
        mimetype: { type: String }
    },
    SolutionIdentified: { type: String},
    CreatorStatus: { type: String},
    ROStatus: { type: String},
    ValidatorStatus: { type: String},
    ApproverStatus: { type: String},
})

const taskData = mongoose.model("taskdatas", TaskSchema)

export default taskData