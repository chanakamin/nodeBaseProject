const ServiceModel = require('../models/service.model');

const addService = async (business, serviceName, price) => {
    const existingService = await ServiceModel.findOne({
        business: business,
        description: serviceName,
    });
    if (existingService) {
        throw new Error('service already exists');
    } else {
        const newService = await ServiceModel.create({
            business: business,
            description: serviceName,
            price: price,
        });
        return newService;
    }
};


module.exports = {
    addService,
}