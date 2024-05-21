module.exports = {
  up: `CREATE TABLE IF NOT EXISTS templates (
    template_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sub_dominio VARCHAR(250) NOT NULL,
    cliente_id INT(11) NOT NULL,
    template_id INT(11) NOT NULL,
    restaurante_id INT(11) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(cliente_id) REFERENCES clientes(cliente_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(template_id) REFERENCES templates(template_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(restaurante_id) REFERENCES restaurantes(restaurante_id) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS templates`
};