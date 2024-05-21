const Database = require("../../helpers/database");
const Categorias = require("../models/Categorias");

class Produtos {

  static async index(request, response) {
    response.render('site/produtos', {
      title: 'Produtos',
      categorias: await Categorias.fetchProductCategorias(),
      productos: [{}, {}, {}, {}],
      filters: ['Com Mais Ranquing', 'Mais Pesquisados', 'Maio Nº de Encomendas', 'Maior Nº de Curtidas', 'Adicionados aos Carrinhos']
    });
  };

}


module.exports = Produtos;