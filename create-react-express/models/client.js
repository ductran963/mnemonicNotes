const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;