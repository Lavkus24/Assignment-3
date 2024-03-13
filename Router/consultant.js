const express = require("express");
const router = express.Router();

const consultant = require("../Controllers/consultantControllers");
router.get("/upcoming-sessions/:consultantId", consultant.consultant);

module.exports = router;
