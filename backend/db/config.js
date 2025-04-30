const mongoose = require("mongoose");

const connectdb = async() => {
  mongoose.connect("mongodb://localhost:27017/e-dashBoard");//connect mongoose from data base..
};

connectdb();//call database connect

