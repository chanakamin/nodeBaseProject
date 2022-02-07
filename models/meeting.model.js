const { Schema, model } = require('mongoose');

const meetingSchema = new Schema({
    date: Date,
    duration: Number,
    clientName: String,
    clientDetails: String,
    business: {
        type: String,
        ref: 'business',
    },
    service: {
        type: String,
        ref: 'service',
    }
});

const MeetingModel = model('Meeting', meetingSchema);

module.exports = MeetingModel;