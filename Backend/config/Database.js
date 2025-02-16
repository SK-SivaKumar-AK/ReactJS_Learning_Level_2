/* Import packages */
const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((connect) => {
        console.log('MongoDB Connect to host: ' + connect.connection.host)
    });
}

module.exports = {
    connectDatabase
}