import { test, expect } from '@playwright/test'
 
test('Multi Select Dropdown Test', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
  await page.selectOption('#colors', ['Red', 'Blue', 'Green', 'Yellow'])
 
  const options = await page.$$("//select[@id='colors']/option")
  expect(options.length).toBe(7)
 
  let flag = false
  for (const option of options) {
    const text = await option.textContent()
    console.log(text)
    if (text.includes('Yellow')) {
      flag = true
      break
    }
  }
 
  expect(flag).toBeTruthy()
  await page.waitForTimeout(2000)
  await page.close()
})
