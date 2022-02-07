const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db');
const userController = require('./controllers/user.controller');
const businessController = require('./controllers/business.controller');
const serviceController = require('./controllers/service.controller');
const meetingController = require('./controllers/meeting.controller');
const authMiddleware = require('./middleware/middleware');
const port = 3000

connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/user', userController);
app.use('/business', authMiddleware, businessController);
app.use('/meeting', authMiddleware, meetingController);
app.use('/service', authMiddleware, serviceController);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})