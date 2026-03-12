const router = require("express").Router()
const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// signup
router.post("/signup", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashed
  })

  await user.save()

  res.json({message: "User created"})
})

// login
router.post("/login", async (req, res) => {
  const user = await User.findOne({email: req.body.email})

  if(!user) return res.status(404).json({message:"User not found"})

  const valid = await bcrypt.compare(req.body.password, user.password)

  if(!valid) return res.status(401).json({message:"Wrong password"})

  const token = jwt.sign({id:user._id}, "secret")

  res.json({token})
})

module.exports = router