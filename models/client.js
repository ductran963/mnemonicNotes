const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contactInfo: { type: String, reuired: false },
  specialNotes: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;