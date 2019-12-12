const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter');
const cors = require('cors');

const { routeError, serverError } = require('./errors.js');

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

app.use(serverError);
app.all('/*', routeError);

module.exports = app;
