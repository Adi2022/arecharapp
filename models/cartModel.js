const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
	itemId: { type: String, required: true },
	quantity: { type: Number, required: true },
	price: {
		type: Number,
	},
    title1:{
        type :String ,
    },
    title2:{
        type :String ,
    },
   
    title3:{
        type :String ,
    },
    title4:{
        type :String ,
    },
    title5:{
        type :String ,
    },
});

module.exports = mongoose.model("CartItem", cartSchema);
