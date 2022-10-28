const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

var portfolioSchema= new mongoose.Schema({
	username:{type:String,lowercase:true,unique:true,required:true},
    token: {type:String,unique:true,uppercase:true,required:true},
	quantity:{type:Number,required:true},
	balance:{type:Number,minimum:0,required:true},
},{collection: "portfolio"});

// userSchema.methods.generateToken = () => {
// 	var today=new Date();
// 	var expire=new Date(today);
// 	expire.setDate=(today.getDate()+20);

// 	return jwt.sign({
// 		id:this._id,
// 		username:this.username,
// 		exp: parseInt(expire.getTime()/1000),
// 	}, `${process.env.jwtsecret}`);
// 	};


const port = mongoose.model('Portfolio',portfolioSchema);
module.exports = port;