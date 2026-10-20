const{test,expect}=require('@playwright/test')

 test('Mousedoubleclick', async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Static.html#google_vignette");

    const seleniunImg=await page.locator('#node') //source locator
    const drop=await page.locator('#droparea') //drop locator

    //approach 1
    /*await seleniunImg.hover()
    await page.mouse.down()

    await drop.hover()
    await page.mouse.up()

    await page.waitForTimeout(5000)*/

    //Approach 2

    await seleniunImg.dragTo(drop)


    const angular=await page.locator('#angular') //source locator
    const drop1=await page.locator('#droparea') //drop locator


    await angular.dragTo(drop1)

    await page.waitForTimeout(5000)

    


 })