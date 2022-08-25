const asyncHandler = require("express-async-handler");
const Goal = require("../models/GoalModel");
const User = require("../models/UserModel");

// @access Private
// @desc  GET GOALS
// @route GET /api/goals
exports.getGoals = asyncHandler(
	async (req, res) => {
		const goals = await Goal.find({
			user: req.user.id,
		});

		res.status(200).json(goals);
	}
);
// @desc  SET GOAL
// @route POST /api/goals
// @access Private
exports.setGoal = asyncHandler(
	async (req, res) => {
		if (!req.body.text) {
			res.status(400);
			throw new Error("Please add a text field");
		}

		const goal = await Goal.create({
			text: req.body.text,
			user: req.user.id,
		});

		res.status(200).json(goal);
	}
);
// @desc  UPDATE GOAL
// @route PUT /api/goals/:id
// @access Private
exports.updateGoal = asyncHandler(
	async (req, res) => {
		const goal = await Goal.findById(
			req.params.id
		);

		if (!goal) {
			res.status(400);
			throw new Error("Goal not found");
		}

		if (!req.user) {
			res.status(401);
			throw new Error("User not found");
		}

		if (goal.user.toString() !== req.user.id) {
			res.status(401);
			throw new Error("User not authorized");
		}

		const updatedGoal =
			await Goal.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			);

		res.status(200).json(updatedGoal);
	}
);

// @desc  DELETE GOAL
// @route DELETE /api/goals/:id
// @access Private
exports.deleteGoal = asyncHandler(
	async (req, res) => {
		const goal = await Goal.findById(
			req.params.id
		);

		if (!req.user) {
			res.status(401);
			throw new Error("User not found");
		}

		if (goal.user.toString() !== req.user.id) {
			res.status(401);
			throw new Error("User not authorized");
		}

		if (!goal) {
			res.status(400);
			throw new Error("Goal not found");
		}

		await goal.remove();

		res.status(200).json({ id: req.params.id });
	}
);
