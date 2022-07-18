import mongoose from "mongoose";

const TopSchema = new mongoose.Schema({
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
    user: {
        type: String,
        // required: true,
    },
        description: {
            type: String,
            // required: true,
        }

},
{
    timestamps: true,
});

export default mongoose.model('Top', TopSchema);