const {Campaign} = require('../models');

/**
 * Get all campaigns
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const get = async (req, res) => {
  try {
    const campaigns = await Campaign.findAll({
      where: {
        status: "active"
      }
    });
    res.json({
      data: campaigns
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Campaigns get failed!'});
  }
}

/**
 * find campaign by id
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const find = async (req, res) => {
  try {
    const campaign = await Campaign.findByPk(req.params.id, {
      where: {
        status: "active"
      }
    });

    if (!campaign) {
      return res.status(404).json({message: 'Campaign not found'});
    }

    res.json({
      data: campaign
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Campaign find failed!'});
  }
}

module.exports = {
  get,
  find,
}
