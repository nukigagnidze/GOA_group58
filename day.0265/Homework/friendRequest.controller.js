const FriendRequest = require("../models/friendRequest.model");
const Friendship = require("../models/friendship.model");
const User = require("../models/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Send request
const createFriendRequest = catchAsync(async (req, res, next) => {
    const { to } = req.params;

    if (req.user._id.toString() === to) {
        return next(new AppError("You cant send request to yourself", 400));
    }

    const existing = await FriendRequest.findOne({
        from: req.user._id,
        to
    });

    if (existing) {
        return next(new AppError("Request already sent", 400));
    }

    const user = await User.findById(to);
    if (!user) {
        return next(new AppError("User not found", 404));
    }

    const friendRequest = await FriendRequest.create({
        from: req.user._id,
        to
    });

    res.status(201).json({
        status: "success",
        data: { friendRequest }
    });
});

// Get received requests
const getFriendRequests = catchAsync(async (req, res) => {
    const requests = await FriendRequest.find({ to: req.user._id })
        .populate("from");

    res.status(200).json({
        status: "success",
        data: { requests }
    });
});

// Get sent requests
const getSentFriendRequests = catchAsync(async (req, res) => {
    const requests = await FriendRequest.find({ from: req.user._id })
        .populate("to");

    res.status(200).json({
        status: "success",
        data: { requests }
    });
});

// Cancel request
const cancelFriendRequest = catchAsync(async (req, res, next) => {
    const { to } = req.params;

    const request = await FriendRequest.findOneAndDelete({
        from: req.user._id,
        to
    });

    if (!request) {
        return next(new AppError("Request not found", 404));
    }

    res.status(200).json({
        status: "success",
        message: "Request canceled"
    });
});

// Accept request
const acceptFriendRequest = catchAsync(async (req, res, next) => {
    const { requestId } = req.params;

    const request = await FriendRequest.findById(requestId);

    if (!request) {
        return next(new AppError("Request not found", 404));
    }

    // check if already friends
    const existingFriendship = await Friendship.findOne({
        $or: [
            { user1: request.from, user2: request.to },
            { user1: request.to, user2: request.from }
        ]
    });

    if (existingFriendship) {
        return next(new AppError("Already friends", 400));
    }

    const friendship = await Friendship.create({
        user1: request.from,
        user2: request.to
    });

    await FriendRequest.findByIdAndDelete(requestId);

    res.status(200).json({
        status: "success",
        message: "Friend request accepted",
        data: { friendship }
    });
});

// Reject request
const rejectFriendRequest = catchAsync(async (req, res, next) => {
    const { requestId } = req.params;

    const request = await FriendRequest.findByIdAndDelete(requestId);

    if (!request) {
        return next(new AppError("Request not found", 404));
    }

    res.status(200).json({
        status: "success",
        message: "Friend request rejected"
    });
});

module.exports = {
    createFriendRequest,
    getFriendRequests,
    getSentFriendRequests,
    cancelFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest
};