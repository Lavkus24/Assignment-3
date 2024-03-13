const express = require("express");
const router = express.Router();
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const multer = require("multer");

// API endpoint for consultants to view the documents uploaded by the clients
const viewDocuments = (req, res) => {
  const filePath = req.file.path;
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading file");
    }
    res.status(200).json({
      uploadedDocuments: uploadedDocuments,
      message: "File uploaded and read successfully",
    });
  });
};


module.exports = {
  viewDocuments,
};
