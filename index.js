const express = require("express");
const connectDatabase = require("./db/config");
const cors=require("cors")
const app = express();
const PORT=process.env.PORT || 3000
app.use(cors())
app.use(express.json());
connectDatabase();

app.use("/blog", require("./routes/blogRoute"));
app.use("/blogBanner", require("./routes/blogBannerRoute"));
app.use("/register", require("./routes/loginRegisterRoute"));
app.use("/login", require("./routes/loginRoute"));
app.use("/impact1", require("./routes/impactRoute1"));
app.use("/impact2", require("./routes/impactRoute2"));
app.use("/about1", require("./routes/aboutRoute"));
app.use("/ingredient", require("./routes/ingredientRoute"));
app.use("/home", require("./routes/home1Route"));
app.use("/bookSlot", require("./routes/bookSlotRoute"));



// Start the server
const port = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
