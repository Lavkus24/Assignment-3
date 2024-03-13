const express = require("express");
const router = express.Router();

const preSessionActivity = require('../Controllers/preSessionActivity')


router.get('/view-documents', preSessionActivity.viewDocuments);

module.exports = router;
