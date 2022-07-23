import CompletedModel from '../models/completedWorkout.js'

export const createCompletedWorkout = async (req, res) => {
  try {
    
    const workout = new CompletedModel({
            exercises: req.body.completedWorkout,
            user: req.body.user,
            workoutName: req.body.workoutName
    });

    console.log(req.body)
    const completWorkout = await workout.save();
    console.log(completWorkout, "это completedExercise креэйт");
    res.json(completWorkout);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось добавить тренировку",
    });
  }
};

export const updateCompletedWorkout = async (req, res) => {
    try {
  
  
      const oneExrecise = {
        currentexerciseName: req.body.currentexerciseName,
        goalSets: req.body.goalSets,
        actualSets: req.body.actualSets,
        goalReps: req.body.goalReps,
        actualReps: req.body.actualReps,
        goalWeight: req.body.goalWeight,
        actualWeight: req.body.actualWeight,
      };
  
      const completedWorkout = await CompletedModel.findOneAndUpdate(
        { 
          user: req.body.user 
        },
        { $push: { exercises: oneExrecise } },
      );
      console.log(completedWorkout, "это completedWorkout апдэйт");
      res.json(completedWorkout);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Не удалось добавить тренировку",
      });
    }
  };