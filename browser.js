const puppeteer = require("puppeteer");

(async () => {
  console.log("Starting browser");

  const browser = await puppeteer.launch({ headless: true });
  const wsEndpoint = browser.wsEndpoint();

  console.log("Browser start on");
  console.log(wsEndpoint);
})();
