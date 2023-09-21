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

  const meuTextoDoArquivo = fs.readFileSync(caminhoArquivo, 'utf-8');
  console.log('Dados do arquivo: \n', meuTextoDoArquivo);

  fs.writeFileSync(caminhoArquivo, `${meuTextoDoArquivo}\nteste`);
  console.log(
    'Novos dados do arquivo: ',
    fs.readFileSync(caminhoArquivo, 'utf-8'),
  );

  fs.renameSync(
    path.resolve('tmp', 'nova-pasta-01'),
    path.resolve('tmp', 'nova-pasta-02'),
  );
} catch (error) {
  console.log(error);
}
