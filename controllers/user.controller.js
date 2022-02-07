const { Router } = require('express');
const UserService = require('../services/user.service');

const router = Router();

router.post('/signup', async (req, res) => {
    // here need also to generate a jwt and returns it in response
});

module.exports = router;
