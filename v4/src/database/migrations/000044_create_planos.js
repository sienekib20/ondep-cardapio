module.exports = {
  up: `CREATE TABLE IF NOT EXISTS planos (
    plano_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    subtitle VARCHAR(250) NOT NULL,
    preco FLOAT(5.2) NOT NULL,
    unidade VARCHAR(250) NOT NULL DEFAULT 'Mês',
    prazo_garantia VARCHAR(250) NOT NULL DEFAULT '1 Semana',
    funcionalidades text NOT NULL,
    marketing text NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS planos`
};