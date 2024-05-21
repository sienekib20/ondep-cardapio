module.exports = {
  up: `CREATE TABLE IF NOT EXISTS estado_pagamentos (
    estado_pagamento_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    estado_pagamento VARCHAR(250) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS estado_pagamentos`
};

// estado: em analise, aprovado, cancelado, pendente