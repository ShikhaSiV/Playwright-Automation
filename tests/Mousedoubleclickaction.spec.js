const{test,expect}=require('@playwright/test')

 test('Mousedoubleclick', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");


    const btnCopy=await page.locator("//button[normalize-space()='Copy Text']")
    //double click

    await btnCopy.dblclick()

    const F2=await page.locator('#field2')
    await expect (F2).toHaveValue('Hello World!')



   

    await page.waitForTimeout(5000)


 })