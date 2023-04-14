const db = require("../models");
const dotenv = require("dotenv");

const initializeService = async () => {
  dotenv.config();
  await db.sequelize.sync();
};

module.exports = {
  initializeService,
};
