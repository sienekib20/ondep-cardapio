module.exports = {
  up: `CREATE TABLE IF NOT EXISTS produtos (
    produto_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(250) NOT NULL,
    preco FLOAT(5.2) NOT NULL,
    estimated FLOAT(5.2) NOT NULL,
    valor_entrega FLOAT(5.2) NOT NULL,
    descricao text NOT NULL,
    tag VARCHAR(20) NOT NULL DEFAULT 'A Venda',
    reducao VARCHAR(20) NOT NULL DEFAULT '0%',
    owner_id INT(11) NOT NULL,
    categoria_id INT(11) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES owners(owner_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES produto_categorias(produto_categoria_id) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS produtos`
};