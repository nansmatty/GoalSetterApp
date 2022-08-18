const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.listen(
	port,
	console.log(
		`🔥🔥🔥🔥🔥Server running on port ${port}🔥🔥🔥🔥🔥🔥`
	)
);
