const exphbs = require('express-handlebars');
const path = require('path');

const { getdir, view_path, partials_path, layout_path } = require('./');

exports.init = function (app) {
    app.engine(
        'html',
        exphbs.engine({
            extname: '.html',
            defaultLayout: null,
            layoutsDir: layout_path(),
            partialsDir: partials_path()
        })
    );

    app.set('view engine', 'html');
    app.set('views', view_path());
};

// Restante do código...
