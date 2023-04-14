'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Campaign } = models;

      Donation.belongsTo(Campaign, {
        as: "campaign",
        foreignKey: "id",
        sourceKey: "campaign_id",
      });
    }
  }
  Donation.init({
    amount: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    campaign_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "campaigns",
        key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};