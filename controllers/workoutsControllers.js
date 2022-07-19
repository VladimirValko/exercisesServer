import WorkoutModel from '../models/workoutPlan.js' 


export const createWorkout = async (req, res) => {
    try {
        console.log(req.body, 'это реквест креэйт')

        const oneExrecise = {
            exerciseName: req.body.exerciseName,
            goalSets: req.body.goalSets,
            actualSets: req.body.actualSets,
            goalReps: req.body.goalReps,
            actualReps: req.body.actualReps,
            weight: req.body.weight,
            
        };
        const workout = new WorkoutModel({
                completedWorkout: oneExrecise,
                user: req.body.user 
        });
    
        // console.log(doc, 'это док');

        const completedWorkout = await workout.save();
         console.log(completedWorkout, 'это workout креэйт')
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
        console.log(req.body, 'это реквест апдэйт')

        const oneExrecise = {
            exerciseName: req.body.exerciseName,
            goalSets: req.body.goalSets,
            actualSets: req.body.actualSets,
            goalReps: req.body.goalReps,
            actualReps: req.body.actualReps,
            weight: req.body.weight,
            target: req.body.target,
        };

        console.log(oneExrecise, 'пришло с фронта')
        const workout = new WorkoutModel({
                completedWorkout: oneExrecise 
        });
    
        // console.log(doc, 'это док');

        if(oneExrecise.exerciseName.length > 2){
            const completedWorkout = await WorkoutModel.findOneAndUpdate(
                {user: req.body.user},
                {$push: {completedWorkout: oneExrecise}}
            );
             console.log(completedWorkout, 'это новый массив апдэйт')
            res.json(completedWorkout);
        } else {
            res.status(500).json({
                message: "Не удалось добавить тренировку",
              });
        }
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
        console.log(id, "это userID реквест гет")
      const workoutPlan = await WorkoutModel.find({
        user: id
      }); 
      console.log(workoutPlan, "это то что нашлось")
      res.json(workoutPlan); 
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Не удалось получить упражнения..",
      });
    }
  };