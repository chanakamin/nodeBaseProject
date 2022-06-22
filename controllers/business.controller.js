const { Router } = require('express');
const BusinessService = require('../services/business.service');

const router = Router();

router.get('/:userId', async (req, res) => {
    const id = req.params.userId;
    const business = await BusinessService.getBusinessOfUser(id);
    res.send(business);
});

router.post('/', async(req, res) => {
    const userId = req.body.userId;
    const business = req.body.business;
    const newBusiness = await BusinessService.createBusiness(business, userId);
    res.send(newBusiness);
});

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const business = req.body.business;
    const updatedBusiness = await BusinessService.updateBusiness(id, business);
    res.send(updatedBusiness);
})

module.exports = router;
