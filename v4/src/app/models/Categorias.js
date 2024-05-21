const Database = require("../../helpers/database");

class Categorias {
  static async fetchProductCategorias() {
    try {
      let results = await Database.exec("SELECT * FROM produto_categorias", []);
      return results.map(row => ({
        id: row.produto_categoria_id,
        categoria: row.categoria
      }));
    } catch (error) {
      return []
    }
  }
}

module.exports = Categorias;