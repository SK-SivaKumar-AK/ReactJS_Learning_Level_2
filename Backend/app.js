/* Import packages */
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');


/* Call the package function */
const app = express();
dotenv.config( { path : path.join(__dirname , 'config' , '.env') } );
app.use(express.json());
app.use(cors());


/* Other file import */
const { productRouter } = require('./routes/product.route');
const { orderRouter } = require('./routes/order.route');
const { connectDatabase } = require('./config/Database');




/* Other files function use */
connectDatabase();
app.use('/api/v1/' , productRouter); 
app.use('/api/v1/' , orderRouter); 



/* Start the server */
app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} environment!`);
});