const mongoose = require("mongoose");
const model = require("../schemas/coinSchema.js");
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

const coin = "SHIB";
const newPrice = "12345.654"

model.updateOne({token:coin},{price: newPrice},function (err, coin) {
  if (err) return handleError(err);
  console.log(err);
});
