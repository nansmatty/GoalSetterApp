const express = require("express");
const {
	registerUser,
	getUser,
	loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getUser);

module.exports = router;
