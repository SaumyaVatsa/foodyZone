const express = require('express');
const mongoConnect = require('./db');
const app = express();
const port = process.env.PORT || 5000;

// Connecting to mongodb
mongoConnect();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use(express.json());
app.use('/api', require("./Routes/createUser"))

app.listen(port, ()=>{
    console.log("Server is listening");
})