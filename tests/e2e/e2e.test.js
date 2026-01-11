import puppeteer from 'puppeteer';
import { fork } from 'child_process';

describe('Credit Card Validator form', () => {
  let browser;
  let page;
  let server;

  const baseUrl = 'http://localhost:9000';

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

    browser = await puppeteer.launch({
      headless: true, 
      slowMo: 250,
      devtools: false,
    });

    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should validate a valid card number', async () => {
    await page.type('#card-number', '4111111111111111');
    await page.click('#validate-btn');

    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).toContain('Valid card!');
    expect(resultText).toContain('visa');
  });

  test('should show error for invalid card number', async () => {
    await page.type('#card-number', '4111111111111112');
    await page.click('#validate-btn');

    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).toContain('Invalid card number.');
  });

  test('should handle empty input', async () => {
    await page.click('#validate-btn');

    const resultText = await page.$eval('#result', el => el.textContent);
    expect(resultText).toContain('Please enter a card number.');
  });
});