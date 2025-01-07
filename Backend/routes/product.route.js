/* Import packages */
const express = require('express');


/* Call the package function */
const productRouter = express.Router();


/* Call another file */
const { getProducts , getSingleProducts } = require('../controllers/product.controller');



/* Routes */
productRouter.route('/products').get(getProducts);
productRouter.route('/product/:id').get(getSingleProducts);



/* export ths file */
module.exports = {
    productRouter
}