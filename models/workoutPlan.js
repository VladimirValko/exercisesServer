import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
   completedWorkout: [],
   user: String
},
{
    timestamps: true,
});

export default mongoose.model('Workout', WorkoutSchema);