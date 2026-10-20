const {test, expect}= require('@playwright/test')
test('checkboxes',async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

//Single checkbox
await page.locator("//input[@id='monday' and @type='checkbox']").check();

expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();

expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();



//Multiple checkbox
const checkboxeLocators=[ 
                "//input[@id='monday' and @type='checkbox']",
                "//input[@id='sunday' and @type='checkbox']",
                "//input[@id='saturday' and @type='checkbox']"  



];
for (const locator of checkboxeLocators)
{
    await page.locator(locator).check()
}
    

await page.waitForTimeout(9000);

for (const locator of checkboxeLocators) //foe unselect the selected ones
{
    if (await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck();
    }
}

})