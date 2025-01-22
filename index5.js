const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const cors = require("cors");
const mangoose = require("mongoose");
const { name } = require("ejs");
app.use(express.json());
app.use(cors());
mangoose.connect("mongodb://localhost:27017/globalDB")
    .then(() => { console.log("db connect"); })
    .catch(() => { console.log("db not connect"); })

const mySchema = mangoose.Schema({
    name: String,
    pwd: String
})
const user = mangoose.model("user", mySchema);

app.post("/", (req, res) => {
    const name = req.body.name;
    const pwd = req.body.pwd;
    const skey = "anusha121";
    const token = jwt.sign(name, skey)
    const details = {
        name: name,
        pwd: token
    }
    const userdetails = new user(details)
    userdetails.save()
        .then(() => { res.send("success") })
        .catch(() => { res.send("wrong") })
})


app.listen(3000, () => {
    console.log("server is listening on port no. 3000")
})