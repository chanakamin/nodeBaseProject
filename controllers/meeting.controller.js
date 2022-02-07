const { Router } = require('express');
const MeetingService = require('../services/meeting.service');

const router = Router();

router.get('/', async (req, res) => {
    // TODO: return list of meetings.
});

module.exports = router;
