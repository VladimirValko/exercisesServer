import mongoose from "mongoose";

const CompletedSchema = new mongoose.Schema({
        bodyPart: {
            type: String,
            required: true,
        },
        equipment: {
            type: String,
            required: true,
        },
        gifUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        target: {
            type: String,
            required: true,
        },
        goalSets: {
            type: Number,
        },
        goalReps: {
            type: Number,
        },
        actualSets: {
            type: Number,
        },
        actualReps: {
            type: Number,
        },
        user: {
            type: String,
            // required: true,
        }

    },
    {
        timestamps: true,
    });

export default mongoose.model('Completed', CompletedSchema);