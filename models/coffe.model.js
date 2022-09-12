const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const coffeSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  presenceOfСaffeine: Boolean,
  volume: Number,
  description: String,
});
const Coffe = mongoose.model("Coffe", coffeSchema);
module.exports = Coffe;
