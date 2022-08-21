const express = require("express");
const colors = require("colors");
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

app.use(errorHandler);

app.listen(
	port,
	console.log(
		`🔥🔥🔥🔥🔥Server running on port ${port}🔥🔥🔥🔥🔥🔥`
	)
);
