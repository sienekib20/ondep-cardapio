module.exports = {
  up: `CREATE TABLE IF NOT EXISTS faqs (
    faq_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pergunta VARCHAR(250) NOT NULL,
    resposta VARCHAR(250) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS faqs`
};