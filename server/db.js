const mongoose = require("mongoose");
require("dotenv").config();

const server_url =
  "mongodb+srv://saumyavatsa2108:" +
  process.env.DB_PASSWORD +
  "@cluster0.bwzcqjt.mongodb.net/foodyZone?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(server_url)
    .then( () =>{
        console.log("Connected");
        const fetched_data = mongoose.connection.db.collection("fooditems");
        fetched_data.find({}).toArray()
        // .then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // })
         
    })
    .catch((err) => console.log("Failed to connect", err));
};

module.exports = connectToMongo;
