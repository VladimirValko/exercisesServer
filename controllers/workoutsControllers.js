import WorkoutModel from "../models/workoutPlan.js";

export const createWorkout = async (req, res) => {
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
    const workout = new WorkoutModel({
      myWorkout: oneExrecise,
      user: req.body.user,
      workoutName: req.body.workoutName,
    });

    const myWorkout = await workout.save();
    console.log(myWorkout, "это workout креэйт");
    res.json(myWorkout);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось добавить тренировку",
    });
  }
};

export const updateWorkout = async (req, res) => {
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

    const workout = new WorkoutModel({
      myWorkout: oneExrecise,
    });

    const userWorkout = await WorkoutModel.findOneAndUpdate(
      { 
        workoutName: req.body.workoutName, 
        user: req.body.user 
      },
      { $push: { myWorkout: oneExrecise } },
    );
    console.log(userWorkout, "это новый массив апдэйт");
    res.json(userWorkout);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось добавить тренировку",
    });
  }
};

export const getWorkoutPlan = async (req, res) => {
  try {
    const id = await req.userId;
    const workoutPlan = await WorkoutModel.find({
      user: id,
    });
    console.log(workoutPlan, "это то что нашлось");
    res.json(workoutPlan);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};
