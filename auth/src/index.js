const express = require("express");
const app = express();
const {connectDB} = require("./helpers/db");
const {host, port, db, apiUrl} = require("./configuration");
const axios = require("axios");


const startServer = () => {
    app.listen(port, async () => {
        console.log(`Starting auth service on port: ${port}`);
        console.log(`On host: ${host}`);
        console.log(`Our database: ${db}`);
    })
}

app.get("/test", (req, res) => {
    res.send("Auth service working!");
})

app.get("/api/getCurrentUser", (req, res) => {
    res.json({
        id: "123",
        email: "foo@gmail.com",
    })
})

app.get("/testwithapidata", (req, res) => {
    axios.get(`${apiUrl}/testapidata`)
        .then((response) => {
            res.json({
                testapidata: response.data.testwithapi
            });
        })
})
connectDB()
    .on("error", console.log)
    .on("disconnected", connectDB)
    .on("open", startServer)
