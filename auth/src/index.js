const express = require("express");
const app = express();
const {connectDB} = require("./helpers/db");
const {host, port, db} = require("./configuration");


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

connectDB()
    .on("error", console.log)
    .on("disconnected", connectDB)
    .on("open", startServer)
