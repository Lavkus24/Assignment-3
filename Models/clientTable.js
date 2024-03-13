const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
  },
  consultantId: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  slotId: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
