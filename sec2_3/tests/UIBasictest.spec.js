const {test, expect} = require('@playwright/test');

test('UI basic test', async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test.only('page test', async({page})=>{
   
    await page.goto("https://google.com");
    console.log(await page.title());
     expect(page).toHaveTitle("Google");
});


