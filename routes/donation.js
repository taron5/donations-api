const express = require('express');
const router = express.Router();
const donationController = require("../contollers/donationController")

/* GET users listing. */
router.post('/:campaignId', donationController.create);

module.exports = router;
