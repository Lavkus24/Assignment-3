const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
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
  available: {
    type: Boolean,
    required: true,
  },
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
