const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const salt = 10;
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

//this is an endpoint
router.route("/allUsers").get(async (req, res) => {
try {
  const data = await User.find()
  return res.json(data);

} catch(err) {
 return res.json(err);
}
})
  

router.route("/register").post(async (req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const dogName = req.body.dogName;
  const breed = req.body.breed;
  const email = req.body.email;
  const password = hashedPassword;
  const role = "user";

 try {
 const user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json("A User exists with this email.");
  } else {
      const newUser = new User({
        dogName,
        breed,
        email,
        password,
        role
      });
      newUser.save(err => {
        if(err) {
          res.status(401).send(err);
        } else {
         return res.status(201).send({user: newUser._id});
        }
      })
    } 
  
} catch(err) {
  res.status(400).send(err);
}
});

router.route("/register-admin").post(async (req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const username = req.body.username;
  const email = req.body.email;
  const password = hashedPassword;
  const role = "admin";

 try {
 const user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json("A User exists with this email.");
    
  } else {
      const newUser = new User({
        username,
        email,
        password,
        role
      });
      newUser.save(err => {
        if(err) {
          res.status(401).send(err);
        } else {
         return res.status(201).send({user: newUser._id});
        }
      })
    } 
  
} catch(err) {
  res.status(400).send(err);
}
    
});

router.route("/login").post(async (req, res) => {
  const email = req.body.email;
  const role = "user";
try {
  const user = await User.findOne({ email: email});

  if (!user) return res.status(401).json({ message: "invalid login credentials" });

  if(user.role !== role) return res.status(401).json({ message: "Unauthorized" });
    
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if(!validPassword) return res.status(400).send("Invalid password");

      const token = jwt.sign({_id: user._id}, process.env.JWT_TOKEN, {expiresIn: "24h"})
      res.json({"token": token});
} catch(err) {
  res.status(400).send(err);
}
 
});

router.route("/login-admin").post(async (req, res) => {
  const email = req.body.email;
  const role = "admin";
try {
  const user = await User.findOne({ email: email});

  if (!user) return res.status(401).json({ message: "invalid login credentials" });

  if(user.role !== role) return res.status(401).json({ message: "Unauthorized" });
    
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if(!validPassword) return res.status(400).send("Invalid password");

      const token = jwt.sign({_id: user._id}, process.env.JWT_TOKEN, {expiresIn: "24h"})
      res.json({"token": token});
} catch(err) {
  res.status(400).send(err);
}
 
});


module.exports = router;
