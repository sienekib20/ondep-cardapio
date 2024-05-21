module.exports = {
  run: `INSERT INTO planos(title, subtitle, preco, unidade, prazo_garantia, funcionalidades, marketing) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  values: [
    [
      'Intimista',
      'Nível alto & mais funcionalidades',
      '7000',
      'Mês',
      '2 Semana',
      'Aumente a performance.;Acesso a todas as ferramentas.;Criação de 3 websites.;Acesso completo aos dados.',
      'Divulgação de produtos.;Publicidade grátis.;Alcance de mais pessoas.'
    ],
    [
      'Ousado',
      'Básico & funcções necessárias',
      '10000',
      'Mês',
      '1 Semana',
      'Performance normal.;Acesso as ferramentas pago.;Criação de 1 websites.',
      'Sem divulgação.;Publicidade paga.;Alcance de até 5 pessoas.'
    ],
  ]
};