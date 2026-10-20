const{test,expect}=require('@playwright/test')

 test('KeyboardAction', async ({page}) =>{
    await page.goto("https://gotranscript.com/text-compare");

     await page.locator("textarea[placeholder='Paste one version of the text here.']").fill("Welcome to automation")

     //control +A -copy the text

     await page.keyboard.press('Control+A')

     //Control+c-copy the text

     await page.keyboard.press('Control+C')

     //tab to go to next tab or box

     await page.keyboard.down('Tab')

     //Controal +V 

     await page.keyboard.press('Control+V')

     await page.waitForTimeout(5000)



 })