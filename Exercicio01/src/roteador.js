const express = require('express');
const { listagemProdutos, vendas } = require('./controladores/vendas');

const rotas = express();

rotas.get('/produtos', listagemProdutos);
rotas.post('/produtos', vendas);

module.exports = rotas;