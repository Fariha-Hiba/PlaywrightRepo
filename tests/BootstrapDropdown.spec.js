import {test, expect} from '@playwright/test'
test('Bootstrap Dropdown Test', async ({ page }) => {
await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
await page.click('.multiselect-selected-text');
 
const count = await page.$$('.multiselect-container.dropdown-menu li input');
  expect(count.length).toBe(11);

  await page.waitForSelector('.multiselect-container.dropdown-menu li label');
  const options = await page.$$('.multiselect-container.dropdown-menu li label');

 
  for (const option of options) {
    const text = await option.textContent();
    console.log(text);
    if (text.includes('Java') || text.includes('C#') || text.includes('MySQL')) {
      await option.check();
    }
  }
 
  await page.waitForTimeout(5000);
 
  for (const option of options) {
    const text = await option.textContent();
    console.log(text);
    if (text.includes('HTML') || text.includes('CSS') || text.includes('C#')) {
      await option.uncheck();
    }
  }
 
  await page.waitForTimeout(5000);
  await page.close();
});