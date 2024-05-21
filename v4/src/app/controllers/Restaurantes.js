const Categorias = require("../models/Categorias");

class Restaurante {

  static index(request, response) {
    response.render('site/restaurantes', { title: 'Restaurantes' });
  };

  static async menus(request, response) {
    response.render('site/menus', { 
      title: 'Menu',
      categorias: await Categorias.fetchProductCategorias()
    });
  }

  static visitar(request, response) {
    let restaurant = request.params.id;
    response.render('site/restaurantes-visit', { title: 'Restaurante ' + restaurant })
  }

  static create(request, response) {
    response.render('site/restaurantes-create', { title: 'Negócios' });
  }

  static aspect(request, response) {
    response.render('site/restaurantes-aspects', { title: 'Negócios' });
  }
}


module.exports = Restaurante;