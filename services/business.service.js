const BusinessModel = require('../models/business.model');

const getBusinessOfUser = (user) => BusinessModel.findOne({ user });

module.exports = {
    getBusinessOfUser,
}