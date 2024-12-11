import mongoose from "mongoose";

const variableSchema = mongoose.Schema({
    _id: false,
    topic: String,
    howTo: [String],
    quickFix: {
        problem: String,
        solution: String,
    },
    thoughts: String
})

const stepSchema = mongoose.Schema({
    _id: false,
    step: {
        type: String,
        required: true
    },
    quickFix: {
        problem: String,
        solution: String,
    },
    moreInfo: String,
})

const commandSchema = mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    steps: [stepSchema],
    variables: [variableSchema],
    tips: [String],
    conclusion: String
})


const trainingSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    trainingInfo: [commandSchema]
})


export const Train = mongoose.model('training', trainingSchema)