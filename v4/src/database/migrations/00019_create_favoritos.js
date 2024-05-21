module.exports = {
  up: `CREATE TABLE IF NOT EXISTS favoritos (
    favorito_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_favorito_id INT(11) NOT NULL,
    produto_id INT(11) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tipo_favorito_id) REFERENCES tipo_favoritos(tipo_favorito_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS favoritos`
};