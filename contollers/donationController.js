const {Campaign, Donation} = require('../models');
const {donationRequest} = require('../validators/donationRequest')

const create = async (req, res) => {
  try {
    const {body, params} = req;

    const {error, value} = donationRequest.create(body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const campaign = await Campaign.findOne({
      where: {
        id: params.campaignId,
        status: "active"
      },
      include: {
        model: Donation,
        as: "donations"
      }
    })

    if (!campaign) {
      return res.status(404).json({message: 'Campaign not found'});
    }

    const totalDonationsAmount = campaign.donations.reduce((sum, donation) => sum + donation.amount, 0) + value.amount;

    if (campaign.goal_amount <= totalDonationsAmount) {
      campaign.status = "successful"
      await campaign.save()
    }

    const donation = await Donation.create({
      campaign_id: params.campaignId,
      ...value
    })

    res.json({
      data: donation
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Donation create failed!'});
  }
}

module.exports = {
  create
}