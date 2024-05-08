const index = function (request, response) {
  response.render('site/restaurantes', {
    layout: null,
    title: 'Restaurantes'
  });
};


module.exports = {
  index
};