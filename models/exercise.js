import mongoose from "mongoose";

//     "bodyPart": "waist",
//     "equipment": "body weight",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
//     "id": "0001",
//     "name": "3/4 sit-up",
//     "target": "abs"

const ExerciseSchema = new mongoose.Schema({
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
    favorite: {
        type: Boolean,
    },
    users: {
        type: String,
    }

},
{
    timestamps: true,
});

export default mongoose.model('Exercise', ExerciseSchema);