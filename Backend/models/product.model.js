/* Import packages */
const mongoose = require('mongoose');


/* create structure */
const productSchema = new mongoose.Schema({
    name :  String,
    price : String,
    description : String,
    rating : String,
    images : [
        {
            image : String
        }
    ],
    category : String,
    seller : String,
    stock : String,
    numOfReview : String,
    createdAt : Date
});


/* create table */
const productTable = mongoose.model('product' , productSchema);

/* export this file */
module.exports = {
    productTable
}