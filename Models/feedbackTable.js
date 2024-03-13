const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
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
  feedbackText: {
    type: String,
    required: true,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
