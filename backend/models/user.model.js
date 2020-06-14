const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    dogName: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    breed: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        uniqueCaseInsensitive: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    created: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});


const User = mongoose.model("User", userSchema);
userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

module.exports = User;