module.exports = {
  up: `CREATE TABLE IF NOT EXISTS owners (
    owner_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    owner VARCHAR(250) NOT NULL,
    conta_id INT(11) NOT NULL,
    restaurante_id INT(11) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(conta_id) REFERENCES contas(conta_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(restaurante_id) REFERENCES restaurantes(restaurante_id) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS owners`
};