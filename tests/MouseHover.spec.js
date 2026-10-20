const{test,expect}=require('@playwright/test')

 test('MouseHover', async ({page}) =>{
    await page.goto("https://demo.opencart.com/en-gb/catalog/desktops/mac");

    const desktop= await page.locator('.nav-link.dropdown-toggle.show')

    const macbook= await page.locator("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)")


    //mouseover action 

    await desktop.hover()
    await macbook.hover()

    await page.waitForTimeout(5000)




 })


