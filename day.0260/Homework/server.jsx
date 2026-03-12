const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/auth.routes")
const postRoutes = require("./routes/post.routes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/project")

app.use("/auth", authRoutes)
app.use("/posts", postRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})