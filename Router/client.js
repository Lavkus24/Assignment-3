const express = require("express");
const router = express.Router();

const client = require("../Controllers/clientControllers");

router.post("/book-session", client.bookSession);
router.get("/session-history/:clientId", client.sessionHistory);
router.post("/session", client.addSession);

module.exports = router;
