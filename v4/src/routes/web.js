const express = require('express');

const router = express.Router();
const Home = require('../controllers/Home');

//
router.get('/', Home.index);

module.exports = router;