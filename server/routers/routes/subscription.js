const express = require('express');
const SubscriptionRouter = express.Router();
const { getSubs } = require('../controllers/subscription');

SubscriptionRouter.get('/subs', getSubs);

// module.exports = subscriptionRouter;
