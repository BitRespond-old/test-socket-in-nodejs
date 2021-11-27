const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const wsEndpoint = browser.wsEndpoint();
  console.log(wsEndpoint);
})();
