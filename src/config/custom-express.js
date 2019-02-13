require('marko/node-require').install();        // necessário para o marko trabalhar com o node
require('marko/express');                       // necessário para o marko trabalhar com o express

const app = require('express')();               // importa o express
const rotas = require('../app/rotas/rotas');    // importa as rotas

rotas(app);

module.exports = app;