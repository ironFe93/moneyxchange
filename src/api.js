const Express = require('express');
const router = Express.Router();

const currency_route = require('./routes/currency_route');
router.use('/currency', currency_route);

module.exports = router;