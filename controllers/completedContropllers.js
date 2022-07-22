import CompletedModel from '../models/completedWorkout.js'

export const createCompletedWorkout = async (req, res) => {
  try {

    const oneExrecise = {
      exerciseName: req.body.exerciseName,
      goalSets: req.body.goalSets,
      actualSets: req.body.actualSets,
      goalReps: req.body.goalReps,
      actualReps: req.body.actualReps,
      weight: req.body.weight,
      target: req.body.target,
    };
    const workout = new CompletedModel({
         exercises: oneExrecise,
            user: req.body.user,
            workoutName: req.body.workoutName
    });

    const completedExercise = await workout.save();
    console.log(completedExercise, "это completedExercise креэйт");
    res.json(completedExercise);
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
        exerciseName: req.body.exerciseName,
        goalSets: req.body.goalSets,
        actualSets: req.body.actualSets,
        goalReps: req.body.goalReps,
        actualReps: req.body.actualReps,
        goalWeight: req.body.weight,
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