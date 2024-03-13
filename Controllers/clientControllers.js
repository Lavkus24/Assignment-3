const express = require("express");
const router = express.Router();
const Booking = require("../Models/clientTable");
const Slot = require("../Models/slotTable");
// API endpoint to book a session
const bookSession = async (req, res) => {
  try {
    const { clientId, consultantId, dateTime } = req.body;
    const slot = await Slot.findOne({ dateTime: dateTime, available: true });
    if (!slot) {
      return res.status(400).json({ "message ": "Slot not available" });
    }
    const booking = new Booking({
      clientId: clientId,
      consultantId: consultantId,
      dateTime: dateTime,
      slotId: slot._id.valueOf(),
    });
    await Slot.findOneAndUpdate({ _id: slot._id }, { available: false });
    booking.save();
    res
      .status(200)
      .json({ message: "Booking successful", bookingId: booking._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// API endpoint for clients to check session history
const sessionHistory = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const sessions = await Booking.find({ clientId: clientId });
    res.status(200).json({ sessions: sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addSession = async (req, res) => {
  try {
    console.log("req.body add session  : ", req.body);
    const clientId = req.body.clientId;
    const consultantId = req.body.consultantId;
    const dateTime = req.body.dateTime;
    const newSlot = new Slot({
      clientId,
      consultantId,
      dateTime,
      available: true,
    });
    await newSlot.save();
    res.status(200).json({ massage: "session added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  bookSession,
  sessionHistory,
  addSession,
};
