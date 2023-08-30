const express = require("express");
const connectDatabase = require("./db/config");
const cors=require("cors")
const app = express();
const PORT=process.env.PORT || 3000
const allCities=require("./cities.json")

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
app.use("/shop", require("./routes/shopRoute"));
app.use("/shopProduct", require("./routes/productRoute"));
app.use("/cartProduct", require("./routes/cartRoute"));
app.use("/checkoutCustomer", require("./routes/checkoutRoute"));
app.use("/query", require("./routes/queryRoute"));





app.get('/api/cities', (req, res) => {
	try {
	  res.status(200).json(allCities);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Internal server error from cities API' });
	}
  });

//   app.controller("changeProfileController", function($scope, $sce){
// 	var dataObject = $("#paymentDataForm").serializeArray();
// 	$.ajax({
// 		type: "POST",
// 		url: restApiServer.ReSTFulAPIHost + '/ccavRequestHandler',
// 		data: dataObject,
// 		cache : false,
// 		processData: false,
// 		success: function (res) {
// 		  //console.log(data);
// 		  $scope.myText = $sce.trustAsHtml(res.data);
// 		},
// 		dataType: 'json'
// 	});
//   });
  

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
