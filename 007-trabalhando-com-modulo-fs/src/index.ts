import fs from 'node:fs';
import path from 'node:path';

try {
  if (!fs.existsSync(path.resolve('tmp'))) {
    fs.mkdirSync('tmp');
  }

  const caminhoArquivo = path.resolve('tmp', 'arquivo.txt');
  if (!fs.existsSync(caminhoArquivo)) {
    const content = 'Deu bom na criação do arquivo';
    fs.writeFileSync(caminhoArquivo, content, 'utf-8');
  }
} catch (error) {
  console.log(error);
}
