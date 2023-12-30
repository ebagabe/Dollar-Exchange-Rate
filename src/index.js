const request = require('request')

/* 
    Requisições feitas através do site: https://docs.awesomeapi.com.br/ 
*/

const coins = 'USD-BRL, EUR-BRL, BTC-BRL'

const options = {
    url: `https://economia.awesomeapi.com.br/last/${coins}`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
}

const callbackAllExchangeRate = function (error, res, body) {
    let json = JSON.parse(body)
    console.log(json);
}

request(options, callbackAllExchangeRate)