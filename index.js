const express = require("express");
const connectDatabase = require("./db/config");
const cors=require("cors")
const app = express();
app.use(cors())
app.use(express.json());
connectDatabase();

app.use("/blog", require("./routes/blogRoute"));

// Start the server
const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
