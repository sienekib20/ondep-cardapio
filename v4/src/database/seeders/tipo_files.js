module.exports = {
  run: `INSERT INTO tipo_files(tipo) VALUES (?)`,
  values: [
    ['Imagem'],
    ['Vídeo'],
    ['Áudio'],
  ]
};