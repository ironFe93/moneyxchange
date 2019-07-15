const Express = require('express');
const routes = Express.Router();
const currency_service = require('../services/currency_service');

routes.post('/convertToEuro', async (req, res, next) => {
    try {
        const result = await currency_service.convert(req.body.amount, req.body.symbol);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = routes;