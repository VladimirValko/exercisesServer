import ExerciseModel from "../models/exercise.js";
import FavoriteModel from '../models/favorite.js'
import TopModel from '../models/top.js'

export const getOne = async (req, res) => {
  try {
    const exercise = await ExerciseModel.findOne(
        { _id: req.params.id });
    res.json(exercise)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

export const getOneOfTop = async (req, res) => {
  try {
    const exercise = await TopModel.findOne(
        { _id: req.params.id });
    res.json(exercise)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

export const getFavoriteOne = async (req, res) => {
  try {
    const exercise = await FavoriteModel.findOne(
        { _id: req.params.id });
    console.log(req.params, 'упражнение')
    res.json(exercise)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const exercises = await ExerciseModel.find(); //
    res.json(exercises); 
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};


export const getTop = async (req, res) => {
  try {
    const exercises = await TopModel.find(); //
    console.log(exercises, 'это exercises')
    res.json(exercises);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

export const getFavorite = async (req, res) => {
  try {
    const user_ID = await req.userId;
    console.log(user_ID);

    const exercises = await FavoriteModel.find({user: user_ID}); //
    console.log(user_ID, 'это user_ID из фаворитс')
    res.json(exercises);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};

// export const getByMuscle = async (req, res) => {
//   try {
//     const muscle = await req.params.muscle;

//     ExerciseModel.find({ target: muscle }, function (err, docs) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(docs);
//         res.json(docs);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Не удалось получить упражнения..",
//     });
//   }
// };


export const searchExercise = async (req, res) => {
  try {
    const search = req.params.search;
    const exercises = await ExerciseModel.find();
        res.json(exercises); 
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить упражнения..",
    });
  }
};





export const addToFavorite = async (req, res) => {
  try {

    const doc = new FavoriteModel({
      bodyPart: req.body.bodyPart,
      equipment: req.body.equipment,
      name: req.body.name,
      gifUrl: req.body.gifUrl,
      target: req.body.target,
      user: req.userId,
      goalReps: req.body.goalReps,
      goalSets: req.body.goalSets
    });

    const favoriteExercise = await doc.save();
     console.log(favoriteExercise, 'это фаворит')
    res.json(favoriteExercise);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось добавить упражнение",
    });
  }
};



// const db = [
//   {
//     "bodyPart": "chest",
//     "equipment": "barbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0025.gif",
//     "name": "barbell bench press",
//     "target": "pectorals",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "The bench press is a compound exercise that involves the pectoralis major of the chest, the anterior deltoids of the shoulder, and the triceps brachii of the upper arm.\n\n It builds strength as well as encouraging the growth (hypertrophy) of these muscles.\n\nThe bench press can help restore muscle balance for athletes who primarily use pulling muscles."
//   },
//   {
//     "bodyPart": "chest",
//     "equipment": "dumbbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0289.gif",
//     "name": "dumbbell bench press",
//     "target": "pectorals",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Set up a bench at an incline of 30-45° and sit with your feet flat on the floor and your back on the bench. Lift the dumbbells to chest height with your palms facing forwards. Breathe out and push the dumbbells up until your arms are fully extended, using your pecs to power the movement. Don't let the dumbbells touch."
//   },
//   {
//     "bodyPart": "chest",
//     "equipment": "dumbbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0302.gif",
//     "name": "dumbbell decline fly",
//     "target": "pectorals",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on an decline bench.\nTo get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top.\nSlightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow.\nOnce the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position.\nWithout allowing the dumbbells to touch, start the next repetition, and continue until the set is completed."
//   },
//   {

//     "bodyPart": "back",
//     "equipment": "barbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0027.gif",
//     "name": "barbell bent over row",
//     "target": "upper back",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight. Brace your core and squeeze your shoulders together to row the weight up until it touches your sternum, then slowly lower it back down again. There's one rep."
//   },
//   {
//     "bodyPart": "back",
//     "equipment": "cable",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0150.gif",
//     "name": "cable bar lateral pulldown",
//     "target": "lats",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Adjust the pad so it sits snugly on your thighs to minimise movement. Grasp the bar with a wide grip, looking forward with your torso upright. Retract your shoulder blades and pull the bar down in front of you to your upper chest. Squeeze your lats at the bottom of the move. Resist the temptation to lean back to aid the movement.\n\nAs you’re sure to soon find out, your grip is typically the first thing to give up with most pulling movements – especially with this lift, since gravity is making all the blood drain down your arms. To ensure your back gets a tough enough workout, reduce the weight once your grip goes so that you can continue with the move and aim for a high rep count that will continue to challenge your lat muscles."
//   },
//   {
//     "bodyPart": "back",
//     "equipment": "cable",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2616.gif",
//     "name": "cable lateral pulldown with v-bar",
//     "target": "lats",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Attach a V-bar to the lat pulldown machine and assume a seated position.\nGrasp the handle with a neutral grip and initiate the movement by depressing the shoulder blades and then flexing the elbow while extending the shoulder.\nPull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control.\nRepeat for the desired number of repetitions."
//   },
//   {
//     "bodyPart": "back",
//     "equipment": "cable",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0180.gif",
//     "name": "cable low seated row",
//     "target": "upper back",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Sit on the bench with your knees bent and grasp the cable attachment. It often has a triangle handle, but it may be a bar. Position yourself with your knees slightly bent and so that you have to reach to grab the handle with outstretched arms yet without curling the lower back over. Brace the abdominals and you're ready to row.\n\nPull the handle and weight back toward the lower abdomen while trying not to use the momentum of the row too much by moving the torso backward with the arms.\nTarget the middle to upper back by keeping your back straight and squeezing your shoulder blades together as you row, chest out.\nReturn the handle forward under tension to full stretch, remembering to keep that back straight even though flexed at the hips. Repeat the exercise for the desired number of repetitions."
//   },
//   {
//     "bodyPart": "upper arms",
//     "equipment": "barbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0038.gif",
//     "name": "barbell drag curl",
//     "target": "biceps",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Grip the barbell with hands about shoulder-width apart and stand straight with shoulders back looking straight ahead. The bar should be resting on your upper thighs. \nCurl the bar up your body keeping your elbows back so that the bar in contact with your front side. \nSlowly lower the bar back down while still keeping the bar in contact with your front side."
//   },
//   {
//     "bodyPart": "upper legs",
//     "equipment": "barbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
//     "name": "barbell deadlift",
//     "target": "glutes",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Load a barbell and roll it against your shins. Bend at your hips and knees and grab the bar with an overhand grip, your hands just beyond shoulder width.\n\nKeeping your lower back naturally arched, pull your torso up and thrust your hips forward as you stand up with the barbell. As you lift the bar, keep it as close to your body as possible. Lower the bar to the floor. That’s 1 rep."
//   },
//   {
//     "bodyPart": "upper legs",
//     "equipment": "barbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
//     "name": "barbell full squat",
//     "target": "glutes",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Stand with your feet more than shoulder-width apart - this wide stance will allow a deeper squat, getting your glutes and hamstrings involved.\n\nHold a barbell across your upper back with an overhand grip – avoid resting it on your neck. Hug the bar into your traps to engage your upper back muscles.\n\nTake the weight of the bar and slowly squat down – head up, back straight, buns out. Lower yourself until your hips are aligned with your knees, with legs at 90 degrees – a deeper squat will be more beneficial but get the strength and flexibility first. Drive your heels into the floor to push yourself explosively back up. Keep form until you’re stood up straight: that’s one rep"
//   },
//   {
//     "bodyPart": "upper legs",
//     "equipment": "dumbbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0336.gif",
//     "name": "dumbbell lunge",
//     "target": "glutes",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "You will need an area where you can take one big step. Choose dumbbells of a weight that will enable you to complete the exercise sets you have chosen.\n\n If you're new to exercise, start with a light weight.\n\n\nStand up straight with a dumbbell in each hand. Hang your arms at your sides. Palms face the thighs (hammer grip) and feet are a little less than shoulder-width apart.\n\n1. Inhale and take a big step forward with your right leg, landing on the heel.\n2. Bend at the knee until the right thigh approaches parallel to the ground. The left leg is bent at the knee and balanced on the toes while in the lunge position.\n3. Step the right foot back on an exhale to return to the starting position.\n4. Repeat the motion with the left leg."
//   },
//   {
//     "bodyPart": "upper legs",
//     "equipment": "dumbbell",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1459.gif",
//     "name": "dumbbell romanian deadlift",
//     "target": "glutes",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Begin by standing with your feet hip-width apart and knees slightly bent. Hold one dumbbell in each hand, and place them in front of hips with palms facing thighs.\nKeeping your spine in a neutral position and squeezing the shoulder blades, start sending the hips back. 'My favourite cue for nailing this movement is imagining you want to close a draw behind you with your bum,' Van't Hoff says.\nKeeping the dumbbells close to your body, lower them down so they are in front of your shins. Once they pass the knees, do not allow the hips to sink further.\nMaintain a neutral spine and drive through heels to fully extend hips and knees, squeezing glutes at the top."
//   },
//   {
//     "bodyPart": "waist",
//     "equipment": "body weight",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2466.gif",
//     "name": "bridge - mountain climber (cross body)",
//     "target": "abs",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "The cross-body mountain climber is a core strengthening exercise that targets the entire abdominal region. The cross-body movement more actively engages the obliques and hip flexors. The exercise also improves upper body strength and stability in the chest, shoulders, and triceps."
//   },
//   {
//     "bodyPart": "waist",
//     "equipment": "body weight",
//     "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2963.gif",
//     "name": "captains chair straight leg raise",
//     "target": "abs",
//     "user": "62d3cf29385ca5a042220a83",
//     "description": "Stand in the captain's chair frame and place your forearms on the padded armrests. Grab the handles, if available. Check that your arm position is firm (stable arms enable you to lift your legs with proper form). Your back should be straight.\n\nInhale and engage your abdominal muscles to prepare for the leg lift.\nBend your knees slightly and raise your legs upward until your quads are parallel to the ground.\nLower your legs in a controlled movement, exhaling as you go, until you're back in the starting position. Keep your core engaged."
//   }
// ]

// export const pushData = async () =>
//   TopModel.insertMany(db)
//     .then(function () {
//       console.log("Data inserted");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
