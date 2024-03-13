// Import necessary modules and set up express app
const express = require("express");
const router = express.Router();
const Feedback = require("../Models/feedbackTable");

// API endpoint for consultants to provide feedback on the session to clients
const provideFeedback = async (req, res) => {
  try {
    const consultantId = req.params.consultantId;
    const { clientId, dateTime, feedbackText } = req.body;

    // Create feedback'

    const feedback = new Feedback({
      clientId: clientId,
      consultantId: consultantId,
      dateTime: dateTime,
      feedbackText: feedbackText,
    });

    await feedback.save();

    res.status(200).json({
      message: "Feedback provided successfully",
      feedbackId: feedback._id.valueOf(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// API endpoint for clients to view the feedback provided by consultants
const viewFeedback = async (req, res) => {
  try {
    const clientId = req.params.clientId;

    // Find feedback for the given client
    console.log("clientId ", clientId);
    const feedback = await Feedback.find({ clientId: clientId });
    console.log("feedback : ", feedback);
    if (!feedback) {
      res.status(404).json({ message: "no feedback found" });
    }
    res.status(200).json({ feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  viewFeedback,
  provideFeedback,
};
