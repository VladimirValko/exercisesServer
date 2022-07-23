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


export const getCompletedWorkouts = async (req, res) => {
    try {
        const completedWorkouts = await CompletedModel.find({
            user: req.userId,
        });
        console.log(req, 'ЭТО РЕК')
      console.log(completedWorkouts, "это то что нашлось completedWorkouts");
      res.json(completedWorkouts);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Не удалось получить упражнения..",
      });
    }
  };