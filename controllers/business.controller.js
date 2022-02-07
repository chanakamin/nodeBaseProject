const { Router } = require('express');
const BusinessService = require('../services/business.service');

const router = Router();

router.get('/:id', async (req, res) => {
    // TODO: return business details.
    res.send('business');
});

module.exports = router;
