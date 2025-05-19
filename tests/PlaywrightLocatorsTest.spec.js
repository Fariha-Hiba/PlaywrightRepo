import { test, expect } from '@playwright/test'

test('Playwright Locators Test', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('id=login2')
    await page.locator('#loginusername').fill('FH')
    await page.locator('id=loginpassword').fill('F123')
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    await expect (page).toHaveTitle('STORE')
    const logoutLink = await page.locator('//*[@id="logout2"]')
    await expect(logoutLink).toBeVisible

    await page.click('id=logout2')
    await expect (page).toHaveTitle('STORE')

    await page.close();

})