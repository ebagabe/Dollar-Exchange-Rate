const request = require('request')

/* 
    Requisições feitas através do site: https://docs.awesomeapi.com.br/ 
*/

const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

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

const dolarCallback = function (error, res, body) {
    let json = JSON.parse(body)
    const price = json.USDBRL['bid']
    const day = json.USDBRL['create_date']
    console.log("VALOR DO DOLAR ATUAL")
    console.log(`Dolar: R$ ${price}, Dia: ${day}`);
}

const euroCallback = function (error, res, body) {
    let json = JSON.parse(body)
    const price = json.EURBRL['bid']
    const day = json.EURBRL['create_date']
    console.log("VALOR DO EURO ATUAL")
    console.log(`Euro: R$ ${price}, Dia: ${day}`);
}

const btcCallback = function (error, res, body) {
    let json = JSON.parse(body)
    const price = json.BTCBRL['bid']
    const day = json.BTCBRL['create_date']
    console.log("VALOR DO BITCOIN ATUAL")
    console.log(`Bitcoin: R$ ${price}, Dia: ${day}`);
}

setInterval(() => {
    request(options, dolarCallback)
    request(options, euroCallback)
    request(options, btcCallback)
    console.log("NOVA REQUISIÇÃO\n")
}, 5000)

