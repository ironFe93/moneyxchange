fetch = require('node-fetch');

const convert = async (amount, symbol) => {

    const rateResult = await getUSDRate(symbol);
    const convertedAmount = amount / rateResult.rates.USD ;
    return convertedAmount;
}

const getUSDRate = async (symbol) => {

    const options = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    }

    const url = `https://api.exchangeratesapi.io/latest?symbols=${symbol}`;
    
    const result = await fetch(url, options);
    const jsonResult = await result.json();

    return jsonResult;
}

module.exports = { convert }