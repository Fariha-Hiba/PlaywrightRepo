import { test } from '@playwright/test'

test('YPage screenshot', async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk')
  await page.screenshot({ path: 'screenshots/' + Date.now() + 'YHomepage.png' })
})

test('YFull page screenshot', async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk')
  await page.screenshot({ path: 'screenshots/' + Date.now() + 'YFullpage.png', fullPage: true })
})

test('YElement screenshot', async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk')
  await page.locator('//*[@id="page-header"]/yt-page-header-renderer/yt-page-header-view-model/div/div[1]').screenshot({ path: 'screenshots/' + Date.now() + 'YElement.png' })
})