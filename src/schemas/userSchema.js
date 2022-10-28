const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

var userSchema= new mongoose.Schema({
	username:{type:String,lowercase:true,unique:true,required:true},
	email:{type:String,lowercase:true,unique:true,match: [/\S+@\S+\.\S+/, 'is invalid'],required:true},
	password:{type:String,required:true},
},{timestamp:true},{collection: "users"});

userSchema.methods.generateToken = () => {
	var today=new Date();
	var expire=new Date(today);
	expire.setDate=(today.getDate()+20);

	return jwt.sign({
		id:this._id,
		username:this.username,
		exp: parseInt(expire.getTime()/1000),
	}, `${process.env.jwtsecret}`);
	};


const user = mongoose.model('User',userSchema);
module.exports = user;