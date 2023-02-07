import mongoose from 'mongoose'


const NcrModifyModel = mongoose.Schema({

    Id:{type:String},
    Type: { type: String, required: true },

    Problem: { type: String, required: true },

    ProcessStage: { type: String, required: true },

    PartNo: { type: String, required: true },

    ReworkHrs: { type: Number, required: true },

    Issue: { type: String, required: true },

    FailureType: { type: String, required: true },

    RCA: {
        type: String,
        enum: ['Yes', 'No'],
        required: true

    },
    Resolutionowner: {
        type: String,
        required: true
    },
    ResolutionownerId: {
        type: String,
        required: true
    },
    RCAValidator: {
        type: String,
        required: true
    },
    RCAValidatorId: {
        type: String,
        required: true
    },
    Finalapprover: {
        type: String,
        required: true
    },
    FinalapproverId: {
        type: String,
        required: true
    },
    Creator: {
        type: String,
        required: true
    },
    CreatorId: {
        type: String,
        required: true
    },
    source: {
        file: { type: Buffer },
        filename: { type: String },
        mimetype: { type: String }
    },
    created: {
        type: Date,
    }
    ,modified:{
        type:Date,
        default: Date.now
    },
})

const NcrModify = mongoose.model("ncrmodify", NcrModifyModel);

export default NcrModify;