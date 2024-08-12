const mongoose = require("mongoose")
require("dotenv").config();

const URI = `mongodb+srv://${process.env.USERBD}:${process.env.PASSWORD}@adso2669736.ptf1civ.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose