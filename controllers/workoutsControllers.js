import WorkoutSchema from '../models/workoutPlan.js' 


export const createWorkout = async (req, res) => {
    try {
        console.log(req.body, 'это реквест')

        const oneExrecise = {
            exerciseName: req.body.exerciseName,
            goalSets: req.body.goalSets,
            actualSets: req.body.actualSets,
            goalReps: req.body.goalReps,
            actualReps: req.body.actualReps,
            weight: req.body.weight,
            
        };
        const workout = new WorkoutSchema({
                completedWorkout: oneExrecise,
                user: req.body.user 
        });
    
        // console.log(doc, 'это док');

        const completedWorkout = await workout.save();
         console.log(completedWorkout, 'это workout')
        res.json(completedWorkout);
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Не удалось добавить тренировку",
        });
      }
};


export const updateWorkout = async (req, res) => {
    try {
        console.log(req.body, 'это реквест')

        const oneExrecise = {
            exerciseName: req.body.exerciseName,
            goalSets: req.body.goalSets,
            actualSets: req.body.actualSets,
            goalReps: req.body.goalReps,
            actualReps: req.body.actualReps,
            weight: req.body.weight,
        };
        const workout = new WorkoutSchema({
                completedWorkout: oneExrecise 
        });
    
        // console.log(doc, 'это док');

        const completedWorkout = await WorkoutSchema.findOneAndUpdate(
            {user: req.body.user},
            {$push: {completedWorkout: oneExrecise}}
        );
         console.log(completedWorkout, 'это новый массив')
        res.json(completedWorkout);
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Не удалось добавить тренировку",
        });
      }
};