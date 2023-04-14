const express = require('express');
const router = express.Router();
const campaignController = require("../contollers/campaignController")

/* GET campaign page. */

// get campaign list
router.get('/', campaignController.get);
// find campaign
router.get('/:id', campaignController.find);

module.exports = router;
