const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {connectDB} = require("./helpers/db");
const {host, port, db} = require("./configuration");


const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, async () => {
        console.log(`Starting api service on port: ${port}`);
        console.log(`On host: ${host}`);
        console.log(`Our database: ${db}`);

/*        const silence = new Post({name: 'Silence'});
        console.log(silence.name);

        await silence.save();
        const kittens = await Post.find();

        console.log(kittens);*/


    })
}

app.get("/test", (req, res) => {
    res.send("Api service working!");
})

connectDB()
    .on("error", console.log)
    .on("disconnected", connectDB)
    .on("open", startServer)
