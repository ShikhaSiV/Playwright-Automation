const {test, expect}= require('@playwright/test')
test('DropDown',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
//select multiple options from multiselect dropdown
 await page.selectOption('#colors',['Red','Green','White'])

await page.waitForTimeout(5000);
});

