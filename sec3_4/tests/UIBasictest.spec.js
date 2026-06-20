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

test('UI basic test select dropdown', async({page})=>{
      const username=page.locator("input#username")
    const password=page.locator("input#password")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");

    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();

    console.log(await page.locator("#usertype").last().isChecked());

    await expect(page.locator("#usertype").last()).toBeChecked();

    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect( page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText");

    // await page.pause();
//   await username.fill("rahulshettyacademy")
//     await password.fill("Learning@830$3mK2")
//      await page.locator("#signInBtn").click();
});

test.only('Child windows hadl', async({browser})=>{
     const context = await browser.newContext();
    const page= await context.newPage();
   //  const username=page.locator("input#username")
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 const documentLink=page.locator("[href*='documents-request']");
 const[ newPage]= await Promise.all([
    context.waitForEvent('page'),
    documentLink.click()
 ]);
 const text= await newPage.locator(".red").textContent();
 const arrayText=text.split("@");
 const domain=arrayText[1].split(" ")[0];
 console.log(domain);
 await page.locator("#username").fill(domain);
 await page.pause();
 console.log(await page.locator("#username").textContent());

});

// test.only('page test', async({page})=>{
   
//     await page.goto("https://google.com");
//     console.log(await page.title());
//      expect(page).toHaveTitle("Google");
// });


