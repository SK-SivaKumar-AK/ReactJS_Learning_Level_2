/* Import other files */
const { productTable } = require('../models/product.model');

/* Functions */
const getProducts = async (req , res , next) => {

    try {

        const query = req.query.keyword? {name : {
            $regex : req.query.keyword,
            $options : 'i'
        }} : {};

        const allProducts = await productTable.find(query);

        res.json({
            success : true,
            allProducts : allProducts
        });
        
    } catch (error) {

        res.status(404).json({
            success : false,
            Error : error.message
        });

    }

}

const getSingleProducts = async (req , res , next) => {

    try {

        const productId = req.params.id;

        const getProductById = await productTable.findById(productId);
        
        res.json({
            success : true,
            getProductById : getProductById
        });

    } catch (error) {

        res.status(404).json({
            success : false,
            Error : error.message
        });

    }

    
}


/* export ths file */
module.exports = {
    getProducts,
    getSingleProducts
}