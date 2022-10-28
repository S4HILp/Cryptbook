const mongoose=require("mongoose");
const bcrypt=require ("bcryptjs");
const jwt=require("jsonwebtoken");

var coinSchema= new mongoose.Schema({
	token:{type:String,unique:true,uppercase:true,required:true},
	price:{type:Number,minimum:0,required:true},
},{collection:"coins"});

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


const coin = mongoose.model('Coin',coinSchema);
module.exports = coin;