const express = require("express");
const router = express.Router();

const feedBack = require("../Controllers/feedBackControllers");

router.get("/view-feedback/:clientId", feedBack.viewFeedback);
router.post("/provide-feedback/:consultantId", feedBack.provideFeedback);

module.exports = router;
