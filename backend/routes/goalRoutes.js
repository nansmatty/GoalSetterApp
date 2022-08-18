const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({ messsage: "Get Goals" });
});

router.post("/", (req, res) => {
	res.status(200).json({ messsage: "Set Goals" });
});

router.put("/:id", (req, res) => {
	res.status(200).json({
		messsage: `Update Goals ${req.params.id}`,
	});
});

router.get("/:id", (req, res) => {
	res.status(200).json({
		messsage: `Delete Goals ${req.params.id}`,
	});
});

module.exports = router;
