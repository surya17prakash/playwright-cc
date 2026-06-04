const {test, expect} = require('@playwright/test');

test('UI basic test', async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    const username=page.locator("input#username")
    const password=page.locator("input#password")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator("input#username").fill("sample");
    await page.locator("input#password").fill("sample");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
    await username.fill("rahulshettyacademy")
    await password.fill("Learning@830$3mK2")
     await page.locator("#signInBtn").click();
     console.log(await page.locator(".card-body a").first().textContent())
     console.log(await page.locator(".card-body a").nth(1).textContent())


});

// test.only('page test', async({page})=>{
   
//     await page.goto("https://google.com");
//     console.log(await page.title());
//      expect(page).toHaveTitle("Google");
// });


