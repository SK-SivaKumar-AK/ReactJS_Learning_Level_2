/* Import packages */
const express = require('express');


/* Call the package function */
const orderRouter = express.Router();


/* Call another file */
const { createOrder } = require('../controllers/order.controller');


/* Routes */
orderRouter.route('/order').post(createOrder);


/* export ths file */
module.exports = {
    orderRouter
}