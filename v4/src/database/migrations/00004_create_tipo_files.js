module.exports = {
  up: `CREATE TABLE IF NOT EXISTS tipo_files (
    tipo_file_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(250) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB`,

  down: `DROP TABLE IF EXISTS tipo_files`
};

// tipo: image, extensao: jpg, etc..
// tipo: video, extensao: mp4, etc..
// tipo: audio, extensao: wav, etc..
// ... if (extensao == ext) retorna tipo 