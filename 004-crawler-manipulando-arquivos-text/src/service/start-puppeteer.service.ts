import fs from 'node:fs';
import path from 'node:path';

import { IFileGenerator } from 'interface/file-generator.interface';
import puppeteer, { Page } from 'puppeteer';

class StartPuppeteerService {
  public start(url: string): Promise<Page> {
    return new Promise(async (resolve, reject) => {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      const allPages = await browser.pages();
      allPages[0].close();

      await page.goto(url);

      if (!page) return reject('Configuração não corresponde!');

      return resolve(page);
    });
  }

  public fileGenerator(payload: Array<IFileGenerator>, fileName: string) {
    const pathTmp = 'tmp';

    if (!fs.existsSync(path.resolve(pathTmp))) {
      fs.mkdirSync(path.resolve(pathTmp));
      console.log('pasta criada com sucesso');
    }

    const csvRows = payload.map((res: IFileGenerator) => {
      return `${res.link};${res.titulo};${res.data}`;
    });

    const csvContent = `Link;Titulo;Data da Postagem\n${csvRows.join('\n')}`;

    try {
      fs.writeFileSync(
        `${path.resolve(pathTmp)}/${fileName}.csv`,
        csvContent,
      );
      return console.log('Arquivo criado com sucesso');
    } catch (error) {}
  }
}

export const startPuppeteerService = new StartPuppeteerService();
