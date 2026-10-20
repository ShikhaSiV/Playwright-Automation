const { test, expect } = require('@playwright/test');

test('Auto suggest dropdown', async ({ page }) => {

    await page.goto('https://www.redbus.in/');

    // Enter source city
    await page.locator('#src').fill('Delhi');

    // Wait for the source city suggestions
    await page.waitForSelector(
        "//li[contains(@class, 'sc-iwsKbI')]"
    );

    // Get all source city suggestions
    const fromCityOptions = await page.$$(
        "//li[contains(@class, 'sc-iwsKbI')]"
    );

    // Print each suggestion
    for (const option of fromCityOptions) {
        const value = await option.textContent();
        console.log(value);
    }

    // Wait for 3 seconds (optional)
    await page.waitForTimeout(3000);

});