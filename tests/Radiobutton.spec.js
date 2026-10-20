const {test, expect}= require('@playwright/test')
test('handle radiobutton',async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

//await page.locator("//input[@id='female']").check();
await page.check("//input[@id='female']"); //selec female radio button
await expect(await page.locator("//input[@id='female']")).toBeChecked();


await page.waitForTimeout(5000); //pausing code
})