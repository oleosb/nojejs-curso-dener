import { IFileGenerator } from 'interface/file-generator.interface';
import { startPuppeteerService } from 'service/start-puppeteer.service';

export class CrawlerPalmeirasController {
  constructor() {}

  public async init() {
    try {
      const page = await startPuppeteerService.start(
        'https://www.palmeiras.com.br/central-de-midia/noticias',
      );

      const selector = '.central-de-midia-container .items-central';
      await page.waitForSelector(selector);

      const nodes = await page.$$(selector);
      const payload: Array<IFileGenerator> = [];

      for (const node of nodes) {
        const link = await page.evaluate((el: Element) => {
          return el.querySelector('a')?.getAttribute('href');
        }, node);

        const titulo = await page.evaluate((el: Element) => {
          return el.querySelector('a .items-central-txt h4')?.textContent;
        }, node);

        const data = await page.evaluate((el: Element) => {
          return el.querySelector('a .items-central-date')?.textContent;
        }, node);

        if (!link || !titulo || !data)
          throw new Error('Estes itens não são válidos');

        payload.push({ link, titulo, data });
      }

      startPuppeteerService.fileGenerator(payload, '_palmeiras');

      page.close();
    } catch (error) {
      console.log(error);
    }
  }
}
