const apiRouter = require('express').Router();
const gamesRouter = require('./gamesRouter');
const { methodNotFound } = require('../errors');
//const getApiJson = require("../controllers/api-controller");

apiRouter.use('/games', gamesRouter);

apiRouter
  .route('/')
  //.get(getApiJson)
  .all(methodNotFound);

module.exports = apiRouter;
