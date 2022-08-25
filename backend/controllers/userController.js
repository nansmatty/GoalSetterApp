const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");
const {
	generateToken,
} = require("../utils/generateToken");

// @access Public
// @desc  REGISTER USER
// @route POST /api/users
exports.registerUser = asyncHandler(
	async (req, res) => {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			res.status(400);
			throw new Error(
				"Please add all the fields"
			);
		}

		const existingUser = await User.findOne({
			email,
		});

		if (existingUser) {
			res.status(400);
			throw new Error("User already exists!");
		}

		//Hash the password

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(
			password,
			salt
		);

		//create user

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		if (user) {
			res.status(201).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			});
		} else {
			res.status(400);
			throw new Error("Invalid user data");
		}
	}
);

// @access Public
// @desc  LOGIN USER
// @route POST /api/users/login
exports.loginUser = asyncHandler(
	async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (
			user &&
			(await bcrypt.compare(
				password,
				user.password
			))
		) {
			res.json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			});
		} else {
			res.status(400);
			throw new Error("Invalid Credentials");
		}
	}
);

// @access Private
// @desc  GET USER
// @route POST /api/users/me
exports.getUser = asyncHandler(
	async (req, res) => {
		res.status(200).json(req.user);
	}
);
