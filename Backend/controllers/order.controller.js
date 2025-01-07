/* Import other files */
const { orderTable } = require('../models/order.model');
const { productTable } = require('../models/product.model');

/* Functions */
const createOrder = async (req , res , next) => {

    const cartItems = req.body;
    const amount = Number(cartItems.reduce((preVal , item) => {
        return preVal + (item.product.price * item.qty);
    } , 0 ) ).toFixed();
    const status = 'pending';

    const orderCreated = await orderTable.create({
        cartItems : cartItems,
        amount : amount,
        status : status
    });

    cartItems.forEach( async (item) => {
        const product = await productTable.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })

    res.json({
        success : true,
        orderCreated : orderCreated
    });
}



/* export ths file */
module.exports = {
    createOrder
}