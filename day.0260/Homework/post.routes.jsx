const router = require("express").Router()
const controller = require("../controllers/post.controller")
const auth = require("../middleware/auth.middleware")

router.post("/", auth, controller.createPost)
router.get("/", auth, controller.getPosts)

module.exports = router