const express = require('express');

//
const router = express.Router();

// Includes
const Home = require('../controllers/Home');
const Restaurantes = require('../controllers/Restaurantes');
const Autenticacao = require('../controllers/Autenticacao');

// 
router.get('/', Home.index);

// Restaurantes
router.get('/restaurantes', Restaurantes.index);
router.get('/restaurantes/:id', Restaurantes.index);

// Alimentos
router.get('/alimentos', Restaurantes.index);
router.get('/alimentos/:id', Restaurantes.index);

//
router.get('/menus', Restaurantes.index);
router.get('/agenda', Restaurantes.index);
router.get('/checkout', Restaurantes.index);
router.get('/search', Restaurantes.index);
router.get('/signin', Autenticacao.index);

//
module.exports = router;