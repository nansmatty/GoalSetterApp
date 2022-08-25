const express = require("express");
const colors = require("colors");
const path = require("path");
const {
	errorHandler,
} = require("./middleware/errorMiddleware");
require("dotenv").config();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const goalRoutes = require("./routes/goalRoutes");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/goals", goalRoutes);

// Serve frontend
if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(
			path.join(__dirname, "../frontend/build")
		)
	);

	app.get("*", (req, res) =>
		res.sendFile(
			path.resolve(
				__dirname,
				"../",
				"frontend",
				"build",
				"index.html"
			)
		)
	);
} else {
	app.get("/", (req, res) =>
		res.send("Please set to production")
	);
}

app.use(errorHandler);

app.listen(
	port,
	console.log(
		`🔥🔥🔥🔥🔥Server running on port ${port}🔥🔥🔥🔥🔥🔥`
	)
);
