'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Donation } = models;

      Campaign.hasMany(Donation, {
        as: "donations",
        sourceKey: "id",
        foreignKey: "campaign_id",
      });
    }
  }
  Campaign.init({
    name: DataTypes.STRING,
    goal_amount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};