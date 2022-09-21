const express = require("express");
const app = express();
const axios = require("axios");
//const mongoose = require("mongoose");
const {connectDB} = require("./helpers/db");
const {host, port, db, authApiUrl} = require("./configuration");


const startServer = () => {
    app.listen(port, async () => {
        console.log(`Starting api service on port: ${port}`);
        console.log(`On host: ${host}`);
        console.log(`Our database: ${db}`);
    })
}

app.get("/test", (req, res) => {
    res.send("Api service working!");
})

app.get("/api/testapidata", (req, res) => {
    res.json({
        testwithapi: true,
    })
})

app.get("/testwithcurrentuser", (req, res) => {
    axios.get(`${authApiUrl}/getCurrentUser`)
        .then((response) => {
            res.json({
                testWithCurrentUser: true,
                currentUserFromAuth: response.data
            });
        })
})

connectDB()
    .on("error", console.log)
    .on("disconnected", connectDB)
    .on("open", startServer)
