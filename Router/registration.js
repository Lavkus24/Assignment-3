const express = require("express");
const router = express.Router();

const client = require("../Controllers/clientRegistration");

router.post("/signup", client.signup);
router.post("/login", client.login);

module.exports = router;
