const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price:String,
    category:String,
    userId:String,
    compony:String

});
//create schema form signup user

module.exports = mongoose.model("products", productSchema);
