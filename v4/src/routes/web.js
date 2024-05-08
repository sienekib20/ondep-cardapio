const express = require('express');

//
const router = express.Router();

// Includes
const Home = require('../controllers/Home');
const Restaurantes = require('../controllers/Restaurantes');
const Autenticacao = require('../controllers/Autenticacao');
const Terms = require('../controllers/Terms');

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

// Autenticacao
router.get('/signin', Autenticacao.index);
router.get('/recover_pwd', Autenticacao.pwd_recover);


// Termos de uso & políticas de segurança
router.get('/terms', Terms.terms);
router.get('/policy', Terms.policy);


//
module.exports = router;