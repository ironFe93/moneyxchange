const fetch = require('node-fetch');
const Rates = require('../schemas/rates');

const convert = async (amount, symbol) => {
    const rateResult = await readUSDRate(symbol);
    const convertedAmount = amount / rateResult.rates.USD ;
    console.log('USD to EUR: ' + amount + ' => ' + convertedAmount);
    return {convertedAmount : convertedAmount};
}

const getUSDRate = async (symbol) => {

    const options = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    }

    const url = `https://api.exchangeratesapi.io/latest?symbols=${symbol}`;
    
    console.log('GET: ' + url);
    const result = await fetch(url, options);
    const jsonResult = await result.json();

    return jsonResult;
}

const readUSDRate = async () => {
    const rate = await Rates.findOne().sort({ field: 'asc', _id: -1 });
    console.log('reading latest rate from db... ' + JSON.stringify(rate));
    return rate;
}

const persistInterval = async () => {
    console.log('initial persist...');
    console.log(await persistRate());
    const interval = 30000;
    console.log('setting interval to ' + interval + ' ms');
    await setInterval(persistRate, interval);
}

const persistRate = async () => {
    const ratesObj = await getUSDRate('USD');
    console.log('persisting rate...' + JSON.stringify(ratesObj));
    const persistedRate = await Rates.create(ratesObj);
    console.log('persisted rate...' + JSON.stringify(persistedRate));
    return persistedRate;
}

module.exports = { convert, getUSDRate, persistInterval, persistRate, readUSDRate }