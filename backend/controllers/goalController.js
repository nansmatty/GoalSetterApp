// @desc  GET GOALS
// @route GET /api/goals

const asyncHandler = require("express-async-handler");

// @access Private
exports.getGoals = asyncHandler(
	async (req, res) => {
		res
			.status(200)
			.json({ messsage: "Get Goals" });
	}
);

// @desc  SET GOAL
// @route POST /api/goals
// @access Private
exports.setGoal = asyncHandler(
	async (req, res) => {
		res
			.status(200)
			.json({ messsage: "Set Goals" });
	}
);

// @desc  UPDATE GOAL
// @route PUT /api/goals/:id
// @access Private
exports.updateGoal = asyncHandler(
	async (req, res) => {
		res.status(200).json({
			messsage: `Update Goals ${req.params.id}`,
		});
	}
);

// @desc  DELETE GOAL
// @route DELETE /api/goals/:id
// @access Private
exports.deleteGoal = asyncHandler(
	async (req, res) => {
		res.status(200).json({
			messsage: `Delete Goals ${req.params.id}`,
		});
	}
);
