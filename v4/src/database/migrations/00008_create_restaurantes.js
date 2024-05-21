module.exports = {
  up: `CREATE TABLE IF NOT EXISTS restaurantes (
    restaurante_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(250) NOT NULL,
    objeto VARCHAR(250) NOT NULL,
    horario VARCHAR(250) NOT NULL,
    link_externo VARCHAR(250) NOT NULL,
    dias_uteis text NOT NULL,
    servico_entrega VARCHAR(250) NOT NULL,
    criterio_entrega VARCHAR(250) NOT NULL,
    descricao text NOT NULL,
    municipio_id INT(11) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(municipio_id) REFERENCES municipios(municipio_id) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS restaurantes`
};