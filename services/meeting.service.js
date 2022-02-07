const { addMinutes } = require('date-fns');
const MeetingModel = require('../models/meeting.model');

const checkForExistingMeetingInTime = async (business, meetingTime, duration) => {
    const laterTime = addMinutes(new Date(meetingTime), duration);
    const meetingsInTime = MeetingModel.findOne({
        business,
        date: {
            $gte: new Date(meetingTime),
            $lt: laterTime,
        }
    });
    // TODO: continue.
};

module.exports = {
    checkForExistingMeetingInTime,
}