const express = require("express");
const router = express.Router();
const Booking = require("../Models/clientTable");

// API endpoint for consultants to see upcoming sessions
const consultant = async (req, res) => {
  try {
    
    const consultantId = req.params.consultantId;
    const sessions = await Booking.find({
      consultantId: consultantId
    });

    res.status(200).json({" upcoming sessions": sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  consultant,
};
