import mongoose from "mongoose";

const CompletedSchema = new mongoose.Schema({
   exercises: [],
   user: String,
   workoutName: String
},
{
    timestamps: true,
});

export default mongoose.model('Completed', CompletedSchema);