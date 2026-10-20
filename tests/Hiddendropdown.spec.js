const { test, expect } = require('@playwright/test');

test('Auto suggest dropdown', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();
    await page.locator("//a[@class='oxd-main-menu-item active']").click()

    //click on dropdown

    await page.locator("div:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)").click()




await page.waitForTimeout(5000);

})