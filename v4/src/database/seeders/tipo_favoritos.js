module.exports = {
  run: `INSERT INTO tipo_favoritos(tipo_favorito) VALUES (?)`,
  values: [
    ['Produto'],
    ['Restaurante']
  ]
};