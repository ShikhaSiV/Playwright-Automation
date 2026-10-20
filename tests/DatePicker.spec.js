const{test,expect}=require('@playwright/test')

 test('Handle table', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill('#datepicker', '10/12/2026')

    await page.waitForTimeout(5000)

 })