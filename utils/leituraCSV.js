const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

function carregarCrachaLiberado() {
  return new Promise((resolve, reject) => {
    const listaLiberados = [];

    fs.createReadStream(path.join(__dirname, '../liberados.csv'))
      .pipe(csvParser())
      .on('data', (data) => listaLiberados.push(data))
      .on('end', () => resolve(listaLiberados))
      .on('error', (err) => reject(err));
  });
}

module.exports = { carregarCrachaLiberado };