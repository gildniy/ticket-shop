const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const controller = require('./controllers/tickets.controller');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/v1/tickets', express.Router()
    .post('/', controller.create)
    .get('/', controller.all)
    .get('/:id', controller.byId)
).listen(port);

module.exports = app;
