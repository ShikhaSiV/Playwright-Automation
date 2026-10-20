import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Click Login
    await page.click('#login2');

    // Provide username
    await page.fill('#loginusername', 'pavanol');

    // Provide password
    await page.fill('#loginpassword', 'test@123');

    // Click Login button
    await page.click("//button[normalize-space()='Log in']");

    // Wait for Logout to become visible
    const logoutlink = page.locator("//a[normalize-space()='Log out']");

    await expect(logoutlink).toBeVisible({ timeout: 10000 });


    await page.close();
});