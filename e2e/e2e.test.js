import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Session', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    server.kill();
    await browser.close();
  });

  test('test-checking button with popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.btn');

    await button.click();
  });
});
