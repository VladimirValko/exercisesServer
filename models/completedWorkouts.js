import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
   completedWorkouts: [],
   user: String,
},
{
    timestamps: true,
});

export default mongoose.model('CompletedWorkouts', WorkoutSchema);