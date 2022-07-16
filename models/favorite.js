import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
    bodyPart: {
        type: String,
        required: true,
    },
    equipment: {
        type: String,
        required: true,
    },
    gifUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },
        goalSets: {
        type: Number,
    },
        goalSets: {
            type: Number,
        },
    user: {
        type: String,
        // required: true,
    }

},
{
    timestamps: true,
});

export default mongoose.model('Favorite', FavoriteSchema);