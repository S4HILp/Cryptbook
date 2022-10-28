const mongoose = require("mongoose");
const model = require("../schemas/userSchema.js");
const bcrypt = require("bcryptjs");
require("dotenv").config({path:__dirname+"./../.env"});

const url = `mongodb+srv://${process.env.dbu}:${process.env.dbp}@cluster0.ybvdkeb.mongodb.net/kapsas?retryWrites=true&w=majority`;

try {
     mongoose.connect(
        url,{useNewUrlParser: true, useUnifiedTopology: true},() => console.log("connected")
    );
  } catch (e) {
    console.log("could not connect");
  }

const user = new model(
    {
        username: "atil",
        email: "sail@p.com",
        password: bcrypt.hashSync("whatever",10)
    }
)

// user.save();