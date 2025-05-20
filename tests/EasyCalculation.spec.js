import { test, expect } from '@playwright/test';

// ↑ Add this line to allow up to 60 seconds for the test instead of the default 30 seconds
test.setTimeout(60000);

test('Easy Calculation Test', async ({ page }) => {
    await page.goto('https://www.google.com/');

    await page.fill("#APjFqb", "EasyCalculation");

    const searchResults = await page.$$("//div[@class='wM6W7d']/span");
    console.log(await searchResults.length);

    const firstRes = await page.waitForSelector("(//div[@class='wM6W7d']/span)[1]");
    await firstRes.click();

    await page.waitForTimeout(20000);

    // for (const res in searchResults) {
    //     if(res.matchAll('easycalculation')) {
    //         res.click()
    //         break
    //     }
    // }

    const firstLink = await page.waitForSelector('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3');
    await firstLink.click();

    const searchBox = await page.locator('#googleSearchId');
    await searchBox.fill('playwright');
    await page.locator('.search_button').click();

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(10000);

    const firstPwLink = await page.waitForSelector("//a[contains(text(),'How to Use')]");
    await firstPwLink.click();

    await expect(page.locator('/html/body/header/nav/div[1]/ul/li/a')).toBeVisible();

    await page.close();
});
