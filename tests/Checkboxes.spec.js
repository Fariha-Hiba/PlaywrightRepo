// 10_Checkboxes.spec.js
const { test, expect } = require('@playwright/test');
 
test('Checkboxes – In Playwright', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Check and verify Sunday
  await page.locator('#sunday').check();
  await expect(page.locator('#sunday')).toBeChecked();
  await page.waitForTimeout(5000);
 
  // Uncheck and verify Sunday
  await page.locator('#sunday').uncheck();
  expect(await page.locator('#sunday').isChecked()).toBeFalsy();
  await page.waitForTimeout(5000);
 
  // Define a list of checkboxes
  const checkboxes = [
    "//input[@id='monday']",
    "//input[@id='sunday']",
    "//input[@id='friday']"
  ];
 
  // Check all of them
  for (const selector of checkboxes) {
    await page.locator(selector).check();
  }
  await page.waitForTimeout(5000);
 
  // Uncheck all of them
  for (const selector of checkboxes) {
    await page.locator(selector).uncheck();
  }
  await page.waitForTimeout(5000);
 
  await page.close();
});