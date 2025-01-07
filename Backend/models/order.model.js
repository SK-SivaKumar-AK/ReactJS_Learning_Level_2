/* Import packages */
const mongoose = require('mongoose');


/* create structure */
const orderSchema = new mongoose.Schema({
    cartItems : Array,
    amount : String,
    status : String,
    createdAt : Date
});


/* create table */
const orderTable = mongoose.model('order' , orderSchema);


/* export this file */
module.exports = {
    orderTable
}