const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratesSchema = new Schema({
    rates: {
        USD: Number
    },
    base: String,
    date: Date
});

const Rates = mongoose.model('Rates', ratesSchema);

module.exports = Rates