const {test, expect} = require('@playwright/test');

test.only('client test', async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("surya@dfg.com");
     await page.locator("#userPassword").fill("Password@123");
     await page.locator("#login").click();
    //  await page.locator("#loginn").click();
    // await page.waitForLoadState('networkidle')
    await page.locator('.card-body b').first().waitFor();
   const titles=await page.locator('.card-body b').allTextContents();
   console.log(titles)
    
});