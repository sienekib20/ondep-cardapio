module.exports = {
  run: `INSERT INTO faqs(pergunta, resposta) VALUES (?, ?)`,
  values: [
    [
      'Qual o primeiro passo para começar?', 
      'Antes de começar, explore a plataforma para assim ter uma ideia geral do que se trata, só assim poderás seguir com a sua decisão.'
    ],
    [
      'É possível comprar vários produtos ?', 
      'É possível sim, basta adicioná-los no seu carrinho de compra, e depois terminar o processo.'
    ],
    [
      'Como ocorre o processo dos pagamentos?', 
      'Simples assim. Ao terminar as compras, verás as informações bancárias (tais como o Nº da Conta, como o IBAN) disponíveis, e uma breve orientação sobre como deverás efectuar o seu pagamento.'
    ],
    [
      'Desejo ter o meu cardápio, como faço?', 
      'Para ter o seu próprio cardapio, navegue pelo meno \´Criar Negócio\´ ou clica o botão laranja no canto esquerdo da página, e seguir as intrucções.'
    ],
    [
      'Qual o nível de Segurança e Fiabilidade?', 
      'A segurança é a primeira garantia que lhe damos, e fazemos com que as tuas transações permeneçam confidenciais.'
    ],
  ]
};