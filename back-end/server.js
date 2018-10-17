const express       = require('express');
const bodyParser    = require('body-parser');
const request = require('request');

const app = express();
const port = 3000;

const url = 'https://api.mlab.com/api/1/databases/ammovarejoteste/collections/produtos?apiKey=';
const apiKey = "9CVUaoNlSBZ6DyouoDU9scYkNCOB8LSg";

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/ammovarejo/produtos', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let products = [];

    request(url+apiKey, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        products = body;          
        res.json(products); 
      } else {
        console.log(error);
        res.json(error);
      }
    });
});

app.listen(port, () =>{
    console.log('Full speed ahead.');
});