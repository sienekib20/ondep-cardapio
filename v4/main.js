const express = require('express');
const { env, abs_path } = require('./src/helpers');
const { init: handlebars } = require('./src/helpers/handlebars');

const app = express();

// views
handlebars(app);

// assets
app.use(express.static(abs_path() + '/public'));

// routes
app.use(require('./src/routes/web'));

// rodando o app
app.listen(env('PORT') || 3000, function () {
    console.log('Rodando o app');
});