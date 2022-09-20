const mongoose = require("mongoose");
const {db} = require("../configuration");

module.exports.connectDB = () => {
    mongoose.connect(db);
    return mongoose.connection;
}