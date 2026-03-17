const express = require("express");
const controller = require("../controllers/friendRequest.controller");
const protect = require("../middlewares/protect");

const router = express.Router();

router.use(protect);

router.post("/:to", controller.createFriendRequest);
router.get("/", controller.getFriendRequests);
router.get("/sent", controller.getSentFriendRequests);
router.delete("/:to", controller.cancelFriendRequest);

router.patch("/accept/:requestId", controller.acceptFriendRequest);
router.delete("/reject/:requestId", controller.rejectFriendRequest);

module.exports = router;