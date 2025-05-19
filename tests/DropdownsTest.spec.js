import {test, expect} from '@playwright/test'

test('Dropdown Test', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
 
  // Select options from dropdown using different methods
  await page.selectOption('#country', 'India');
  await page.selectOption('#country', { label: 'India' });
  await page.selectOption('#country', { value: 'uk' });
  await page.selectOption('#country', { index: 6 });
 
  // Verify number of dropdown options
  const options = await page.$$('#country option');
  expect(options.length).toBe(10);
 
  const options1 = page.locator('//select[@id="country"]/option');
  await expect(options1).toHaveCount(10);
 
  // Check if 'India' is present in the dropdown options
  let flag = false;
  for (const option of options) {
    const textOptions = await option.textContent();
    console.log(textOptions);
    if (textOptions.includes('India')) {
      flag = true;
      break;
    }
  }


expect(flag).toBeTruthy()
await page.waitForTimeout(3000)
await page.close()
})