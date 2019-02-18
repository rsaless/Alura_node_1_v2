require('marko/node-require').install();        // necessário para o marko trabalhar com o node
require('marko/express');                       // necessário para o marko trabalhar com o express

const app = require('express')();               // importa o express
const rotas = require('../app/rotas/rotas');    // importa as rotas
const bodyParser = require('body-parser');      // importa o body-parser, necessário para obter dados inseridos no form e enviados pelo post

app.use(bodyParser.urlencoded({extended: true}));
app.use('*', (req, res, next) => {
    //console.log('olá');
    next();
});

rotas(app);


module.exports = app;