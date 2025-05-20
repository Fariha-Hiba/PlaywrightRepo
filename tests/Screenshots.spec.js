import { test } from '@playwright/test'

test('Page screenshot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  await page.screenshot({ path: 'screenshots/' + Date.now() + 'Homepage.png' })
})

test('Full page screenshot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  await page.screenshot({ path: 'screenshots/' + Date.now() + 'Fullpage.png', fullPage: true })
})

test('Element screenshot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  await page.locator('//a[normalize-space()="Samsung galaxy s6"]').screenshot({ path: 'screenshots/' + Date.now() + 'Element.png' })
})
