const { Router } = require('express');
const ServicesService = require('../services/service.service');

const router = Router();

router.get('/', async (req, res) => {
    const { businessId } = req.query;
    const services = await ServicesService.getServices(businessId);
    res.send(services);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const service = await ServicesService.getService(id);
    res.send(service);
});

router.put('/:id', async (req, res) => {
    const { service } = req.body;
    const { id } = req.params;
    const _service = await ServicesService.updateService(id, service);
    return res.send(_service);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await ServicesService.deleteService(id);
    res.send('deleted');
})

router.post('/', async (req, res) => {
    const { businessId, name, service } = req.body;
    try {
        const _service = await ServicesService.addService(businessId, name, service);
        res.send(_service);
    } catch (err) {
        res.status(500).send(err.message);
    }
    

})

module.exports = router;
