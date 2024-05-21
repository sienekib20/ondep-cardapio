const index = function (request, response) {
    response.render('index', {
        layouts: null,
        title: 'Home Page'
    });
};

module.exports = { index };