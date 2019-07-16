const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27017/currency_exchange', {useNewUrlParser: true});

connection.then(() => {
    console.log('mongoose connected');
}).catch( e => {
    console.log('could not connect to mongo');
});

module.exports = {connection}