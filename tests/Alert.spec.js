const{test,expect}=require('@playwright/test')

 test('Alert with ok button', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");



    //Enabling alert handling 
    page.on('dailog', async dialog=>{
     expect(dialog.type()).toContain('alert')
     expect(dialog.message()).toContain('I am an alert box!')
     await dialog.accept();

    })

    await page.click("//button[@id='alertBtn']");

    //await page.waitForTimeout(5000);
 })



 test('prompt dialog', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");



    //Enabling alert handling 
    page.on('dialog', async dialog=>{
     expect(dialog.type()).toContain('prompt')
     expect(dialog.message()).toContain('Please enter your name:')
     expect(dialog.defaultValue()).toContain('Harry Potter')
     await dialog.accept('Shikha');

    })

    await page.click("//button[@id='promptBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Shikha! How are you today?')

    //await page.waitForTimeout(5000);
 })


