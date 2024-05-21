module.exports = {
  run: `INSERT INTO filters(filter) VALUES (?)`,
  values: [
    [
      'Com Mais Ranquing',
    ],
    [
      'Mais Pesquisados',
    ],
    [
      'Maior Nº de Encomendadas',
    ],
    [
      'Maior Nº de Curtidas',
    ],
    [
      'Adiconados aos Favoritos',
    ],
  ]
};