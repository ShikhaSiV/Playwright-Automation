const {test, expect}= require('@playwright/test')
test('DropDown',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
//multiples ways to select option from dropdown

await page.locator("#country").selectOption({label:'India'});


//await page.waitForTimeout(5000);


});