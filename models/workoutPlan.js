import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
   myWorkout: [],
   user: String,
   workoutName: String
},
{
    timestamps: true,
});

export default mongoose.model('Workout', WorkoutSchema);