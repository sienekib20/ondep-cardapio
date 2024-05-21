module.exports = {
  up: `CREATE TABLE IF NOT EXISTS pagamentos (
    pagamento_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    preco FLOAT(5.2) NOT NULL,
    desconto VARCHAR(20) NOT NULL DEFAULT '0%',
    comprovativo VARCHAR(250) NOT NULL,
    estado_pagamento_id INT(11) NOT NULL,
    cliente_id INT(11) NOT NULL,
    produto_id INT(11) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(estado_pagamento_id) REFERENCES estado_pagamentos(estado_pagamento_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(cliente_id) REFERENCES clientes(cliente_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(produto_id) REFERENCES produtos(produto_id) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS pagamentos`
};