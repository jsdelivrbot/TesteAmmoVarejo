const express       = require('express');
const bodyParser    = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/ammovarejo/produtos', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    let produtos = [
        { 
          nome: 'Cama de Casal',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Criado Mudo',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Colchão Solteiro',
          preco: 2000.0,
          imagem: ''
        },
        {
          nome: 'Armario',
          preco: 2000.0,
          imagem: ''
        }
      ];
    
    res.json(produtos); 
});

app.listen(port, () =>{
    console.log('Full speed ahead.');
});