const {test,expect}=require('@playwright/test')
test('Assertion',async ({page})=>{

await page.goto('https://demo.nopcommerce.com/register')

//to have URL

await expect (page).toHaveURL ('https://demo.nopcommerce.com/register')

//to have title

//await expect (page).toHaveTitle('nopCommerce demo store. Register')

//logo locator
 const logoElement=await page.locator('.header-logo')
await expect (logoElement).toBeVisible()
})