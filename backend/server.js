require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB Database Connection Established Successfully");     
}); 

// const usersRouter = require("./authController/users");
const authRouter = require("./authController/auth");
const postRoute = require("./authController/posts");

// app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/auth", postRoute);

app.listen(port, (req, res) => {
    console.log(`Server is running on port: ${port}`);
});