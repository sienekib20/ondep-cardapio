module.exports = {
  run: `INSERT INTO estado_pagamentos(estado_pagamento) VALUES (?)`,
  values: [
    ['Aprovado'],
    ['Cancelado'],
    ['Em Análise'],
    ['Pendente']
  ]
};