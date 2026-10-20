const{test,expect}=require('@playwright/test')

 test('Screenshot', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.screenshot({path:'tests\Screenshots/' + Date.now() + 'HomePage.png'})


    await page.waitForTimeout(5000)
    })


   