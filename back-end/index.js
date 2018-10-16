/*const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) */

const express       = require('express');
const bodyParser    = require('body-parser');

const app = express();
const port = process.env.PORT;

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
