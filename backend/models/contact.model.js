const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;