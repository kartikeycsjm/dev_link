import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    provider: {
        type: String,
        enum: ['GOOGLE', 'CREDENTIALS'],
        required: true
    },
    verified: {
        type: Boolean,
        require:true,
        default: false
    },
    password: {
        type: String
    }
});

// Corrected model initialization
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
