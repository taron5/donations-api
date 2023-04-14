const Joi = require("joi");

const donationRequest = {
  create: function (body) {
    const schema = Joi.object({
      amount: Joi.number().required(),
      nickname: Joi.string().required(),
    });

    return schema.validate(body);
  },
};

module.exports.donationRequest = donationRequest;
