const express = require('express');

//
const router = express.Router();

// Includes
const Home = require('../app/controllers/Home');
const Restaurantes = require('../app/controllers/Restaurantes');
const Autenticacao = require('../app/controllers/Autenticacao');
const Terms = require('../app/controllers/Terms');
const Produtos = require('../app/controllers/Produtos');
const Templates = require('../app/controllers/Templates');
const Controller = require('../app/controllers/Controller');
const isAuthenticated = require('../app/middlewares/authMiddleware');

// 
router.get('/', Home.index);



// Restaurantes
router.get('/restaurantes', Restaurantes.index);
router.get('/restaurante/:id', Restaurantes.visitar);

// Init Restaurantes
router.get('/create', Restaurantes.create);
router.get('/create/visual', Restaurantes.aspect);

// Templates
router.get('/live/:id', Templates.preview);

// Alimentos
router.get('/alimentos', Restaurantes.index);
router.get('/alimentos/:id', Restaurantes.visitar);

// Produtos
router.get('/produtos', Produtos.index);

//
router.get('/menus', isAuthenticated, Restaurantes.menus);
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