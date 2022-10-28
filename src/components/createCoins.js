const mongodb = require("mongodb");
const env = require("dotenv");
const client = mongodb.MongoClient;

env.config({path:__dirname+"./../.env"})

let url = `mongodb+srv://${process.env.dbu}:${process.env.dbp}@cluster0.ybvdkeb.mongodb.net/?retryWrites=true&w=majority`;
let coin = "BTC";
let price = "17000";
client.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kapsas");
    var myobj = { crypname: coin, price: price };
    dbo.collection("coins").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("success");
      db.close();
    });
  });